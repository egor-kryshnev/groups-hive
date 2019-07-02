import { AuthService } from './../auth/auth.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterdontshowinstart'
})
export class FilterDontshowinstartPipe implements PipeTransform {

  constructor(private authService: AuthService) {}

  transform(arr: any[], prop: string, value: string , method:Method): any {
    if (arr) {
      if (!value || value.length < 3 || value === this.authService.getAcc().name) {
        return [];
      } else {
        return arr.filter(obj => this.filter(obj[prop],value, method));
      }
    } else {
      return [];
    }
  }

  filter(source :string, target :string, method:Method) : boolean {

    switch(method) {
      case "includes" : return source.includes(target)
      case "equal"  : return source === target
      case "not-equal" : return source !== target
    }
  }

}

type Method ="includes" | "equal" | "not-equal"

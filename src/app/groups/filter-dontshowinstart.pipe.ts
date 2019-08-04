import { GroupDetailService } from './group-detail/group-detail.service';
import { AuthService } from './../auth/auth.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterdontshowinstart'
})
export class FilterDontshowinstartPipe implements PipeTransform {

  constructor(private authService: AuthService, private groupDetailService: GroupDetailService) {}

  transform(arr: any[], prop: string, value: string , method:Method): any {
    if (arr) {
      if (!value || value.length < 3) {
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
      case "includes" : return source.toUpperCase().includes(target.toUpperCase())
      case "equal"  : return source === target
      case "not-equal" : return source !== target
      case "addpeople": {
        if(this.groupDetailService.getGroup()){
          let groupAddPeople = this.groupDetailService.getPeople();
          let sdf = groupAddPeople.filter(el => {
            if(el.user.fullName.toUpperCase().includes(target.toUpperCase())){
              return true;
            }
          });
          if (sdf.length > 0){
            return false;
          } else {
            return source.toUpperCase().includes(target.toUpperCase());
          }
        } else {
          return source.toUpperCase().includes(target.toUpperCase())
        }
      }
    }
  }

}

type Method = "includes" | "equal" | "not-equal" | "addpeople"

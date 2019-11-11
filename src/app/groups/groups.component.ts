import { GetipService } from '../getip.service';
import { AuthService } from './../auth/auth.service';
import { Component, OnInit, Input, SimpleChanges, SimpleChange, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

import { Group } from './group.model';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit, OnChanges {
  @Input() groups: Group[];
  @Input() groupsAdmin: Group[];
  nameGroup: string;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute, private authService: AuthService, private getipService: GetipService) { }

  ngOnInit() {    

    /** Shraga */
    // this.http.get('http://' + this.getipService.getip() + ':4200/user').subscribe((res: any[]) => {
    //   this.authService.login(res);
    //   console.log(this.authService.getUser());
    //   this.http.get('http://' + this.getipService.getip() + ':5000/api/allGroups/getGroupsByPersonNotAdmin/' + this.authService.getId()).subscribe((res: any[]) => {
    //     this.groups = res;
        
    //     // console.log(this.groups);
    //   });
  
      
    //   this.http.get('http://' + this.getipService.getip() + ':5000/api/allGroups/getGroupsByPersonAdmin/' + this.authService.getId()).subscribe((res: any[]) => {
    //     this.groupsAdmin = res;
        
    //   });
    // });

    /** Angular */
    this.http.get('http://' + this.getipService.getip() + ':5000/api/allGroups/getGroupsByPersonNotAdmin/' + this.authService.getId()).subscribe((res: any[]) => {
        this.groups = res;
        
        // console.log(this.groups);
      });
  
      
      this.http.get('http://' + this.getipService.getip() + ':5000/api/allGroups/getGroupsByPersonAdmin/' + this.authService.getId()).subscribe((res: any[]) => {
        this.groupsAdmin = res;
        
      });



    

    

    
    
  }

  checking(str) {
    if(!this.nameGroup || this.nameGroup.length < 3) return false;

    if(str.toUpperCase().substr(0, this.nameGroup.length).indexOf(this.nameGroup.toUpperCase()) >= 0){
      return true;
    } else {
      return false;
    }    
  }

  onGroup(group: any){
    // console.log(group);
    // this.router.navigate([group._id], {relativeTo: this.route});
  }


  ngOnChanges(changes: SimpleChanges) {
    const name: SimpleChange = changes.nameGroup;
    console.log('got name: ', name.currentValue);
  }
  
}

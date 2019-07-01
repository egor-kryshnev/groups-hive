import { People } from './people.model';
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
  private nameGroup: string;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.http.get('http://localhost:5000/allGroups').subscribe((res: any[]) => {
    //   this.groups = res;
    //   // console.log(this.groups);
    // });

    
    

    this.http.get('http://localhost:5000/allGroups/getGroupsByPerson/first').subscribe((res: any[]) => {
      this.groups = res;
      // console.log(this.groups);
    });
    this.http.get('http://localhost:5000/allGroups/getGroupsByPersonAdmin/first').subscribe((res: any[]) => {
      this.groupsAdmin = res;
      // console.log(this.groups);
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

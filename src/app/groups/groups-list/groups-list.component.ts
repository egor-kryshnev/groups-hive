import { Component, OnInit, Input } from '@angular/core';

import { Group } from '../group.model';

@Component({
  selector: 'app-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.css']
})
export class GroupsListComponent implements OnInit {
  @Input() groups: Group[];
  @Input() mygroups: boolean;
  @Input() nameGroupp: string;

  constructor() { }

  ngOnInit() {

  }

  checking(str) {
    if(!this.nameGroupp || this.nameGroupp.length < 3) return true;

    if(str.toUpperCase().substr(0, this.nameGroupp.length).indexOf(this.nameGroupp.toUpperCase()) >= 0){
      // console.log(true);
      return true;
    } else {
      return false;
    }    
  }

  

}

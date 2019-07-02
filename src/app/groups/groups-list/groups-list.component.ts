import { AuthService } from './../../auth/auth.service';
import { Component, OnInit, Input } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';

import { Group } from '../group.model';
import { GroupNewModalComponent } from './../group-newModal/group-newModal.component';

@Component({
  selector: 'app-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.css']
})
export class GroupsListComponent implements OnInit {
  @Input() groups: Group[];
  @Input() mygroups: boolean;
  @Input() nameGroupp: string;
  user: string;

  modalRef: BsModalRef;

  constructor(private modalService: BsModalService, private authService: AuthService) { }

  ngOnInit() {
    this.user = this.authService.getAcc().name;
  }

  // checking(str) {
  //   if(!this.nameGroupp || this.nameGroupp.length < 3) return true;

  //   if(str.toUpperCase().substr(0, this.nameGroupp.length).indexOf(this.nameGroupp.toUpperCase()) >= 0){
  //     // console.log(true);
  //     return true;
  //   } else {
  //     return false;
  //   }    
  // }

  onNew() {
    this.modalRef = this.modalService.show(GroupNewModalComponent,  {
      initialState: {
        title: 'Create a New Group',
        data: {}
      }
    });
  }

  

}

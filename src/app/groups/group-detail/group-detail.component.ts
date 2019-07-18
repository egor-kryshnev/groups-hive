import { ModalChangeDescriptionComponent } from './modal-change-description/modal-change-description.component';
import { GetipService } from './../../getip.service';
import { ModalRemoveGroupComponent } from './modal-remove-group/modal-remove-group.component';
import { AuthService } from './../../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { Group } from './../group.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GroupDetailService } from './group-detail.service';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ModalChangeAvatarGroupComponent } from './modal-change-avatar-group/modal-change-avatar-group.component';
import { ModalMailSenderComponent } from './modal-mail-sender/modal-mail-sender.component';

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.css']
})
export class GroupDetailComponent implements OnInit {
  // group: Group;
  changingName: string;
  changeName: boolean = false;
  admin: boolean;
  description: string;

  modalRef: BsModalRef;

  constructor(private modalService: BsModalService, private router: Router, private route: ActivatedRoute, private http: HttpClient, private groupDetailService: GroupDetailService, private authService: AuthService, private getipService: GetipService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    
    if(id){
      this.http.get('http://' + this.getipService.getip() + ':5000/api/getOneGroupById/' + id).subscribe((res: any) => {
          console.log(res);
          this.groupDetailService.setGroup(res);
          this.changingName = this.groupDetailService.getGroupName();
          this.admin = this.authService.checkAdmin(this.groupDetailService.getPeople());
          this.description = this.groupDetailService.getgroupDescription();
          // this.group = res;        
      });
    }
  }


  onChangeName() {
    this.changeName = true;
  }

  onCancelChangingName() {
    this.changeName = false;
  }

  onSaveName(name) {
    // console.log(name);
    
    this.changeName = false;
    this.groupDetailService.updateNameGroup(name);
    this.changingName = this.groupDetailService.getGroupName();
  }

  onRemoveGroup() {
    // this.groupDetailService.removeGroup();
    this.modalRef = this.modalService.show(ModalRemoveGroupComponent,  {
      initialState: {
        title: 'Remove Group',
        leaveOrRemove: false
      }
    });
  }

  onChangAvatarGroup() {
    this.modalRef = this.modalService.show(ModalChangeAvatarGroupComponent,  {
      initialState: {
        title: 'Change Avatar Group',
        data: {}
      }
    });
  }

  onChangeDescriptionGroup() {
    this.modalRef = this.modalService.show(ModalChangeDescriptionComponent, {
      initialState: {
        title: 'Change Descripition Of Group',
        description: this.groupDetailService.getgroupDescription()
      }
    });
  }

  onLeaveFromGroup() {
    this.modalRef = this.modalService.show(ModalRemoveGroupComponent,  {
      initialState: {
        title: 'Leave From Group',
        leaveOrRemove: true
      }
    });
  }

  onSendMailForGroup() {
    this.modalRef = this.modalService.show(ModalMailSenderComponent,  {
      initialState: {
        title: 'Mail Sender'
      }
    });
  }

}

import { GroupDetailService } from './../group-detail.service';
import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modal-remove-group',
  templateUrl: './modal-remove-group.component.html',
  styleUrls: ['./modal-remove-group.component.css']
})
export class ModalRemoveGroupComponent implements OnInit {
  title: string;
  leaveOrRemove: boolean;


  constructor(public modalRef: BsModalRef, private groupDetailService: GroupDetailService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onSubmit() {
    if(this.leaveOrRemove){
      this.onLeave();
    } else {
      this.onRemove();
    }
    
  }

  onRemove() {
    this.groupDetailService.removeGroup();
    this.modalRef.hide();
  }

  onLeave() {
    this.groupDetailService.leaveGroup(this.modalRef);
    // setTimeout(() => {
    // }, 800);
  }

}

import { GroupDetailService } from './../group-detail.service';
import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-remove-group',
  templateUrl: './modal-remove-group.component.html',
  styleUrls: ['./modal-remove-group.component.css']
})
export class ModalRemoveGroupComponent implements OnInit {

  constructor(public modalRef: BsModalRef, private groupDetailService: GroupDetailService) { }

  ngOnInit() {
  }

  onSubmitRemove() {
    this.groupDetailService.removeGroup();
    this.modalRef.hide();
  }

}

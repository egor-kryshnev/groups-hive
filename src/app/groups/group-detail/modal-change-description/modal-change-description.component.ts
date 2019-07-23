import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupDetailService } from '../group-detail.service';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-change-description',
  templateUrl: './modal-change-description.component.html',
  styleUrls: ['./modal-change-description.component.css']
})
export class ModalChangeDescriptionComponent implements OnInit {
  title: string;
  description: string;

  constructor(public modalRef: BsModalRef, private groupDetailService: GroupDetailService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onSubmit() {
    this.groupDetailService.updateDescriptionGroup(this.description);
    this.modalRef.hide()
  }

}

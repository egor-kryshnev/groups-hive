import { GroupDetailService } from './../../group-detail.service';
import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Router, ActivatedRoute } from '@angular/router';
import { PeopleGroup } from 'src/app/groups/peopleGroup.model';

@Component({
  selector: 'app-modal-remove-user',
  templateUrl: './modal-remove-user.component.html',
  styleUrls: ['./modal-remove-user.component.css']
})
export class ModalRemoveUserComponent implements OnInit {
  title: string;
  people: PeopleGroup[];
  personIndex: number;

  constructor(public modalRef: BsModalRef, private groupDetailService: GroupDetailService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onSubmit() {

    this.people.splice(this.personIndex, 1);
    this.groupDetailService.updatePeopleGroup(this.people);
    this.modalRef.hide();
  }

  


}

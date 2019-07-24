import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { GroupDetailService } from '../group-detail.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modal-mail-sender',
  templateUrl: './modal-mail-sender.component.html',
  styleUrls: ['./modal-mail-sender.component.css']
})
export class ModalMailSenderComponent implements OnInit {
  @Input() subject: string;
  @Input() text: string;

  constructor(public modalRef: BsModalRef, private groupDetailService: GroupDetailService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onSend() {
    const resultJson = {
      idGroup: this.groupDetailService.getGroupId(),
      subject: this.subject,
      text: this.text
    }

    console.log(resultJson);
  }

}

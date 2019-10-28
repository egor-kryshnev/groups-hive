import { AuthService } from './../../../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { GroupDetailService } from '../group-detail.service';
import { Router, ActivatedRoute } from '@angular/router';
import { GetipService } from 'src/app/getip.service';

@Component({
  selector: 'app-modal-mail-sender',
  templateUrl: './modal-mail-sender.component.html',
  styleUrls: ['./modal-mail-sender.component.css']
})
export class ModalMailSenderComponent implements OnInit {
  @Input() subject: string;
  @Input() text: string;
  nameEmail: string = this.authService.getName() + " " + this.authService.getEmail();
  @Input() textSign: string = this.nameEmail; 
  

  constructor(public modalRef: BsModalRef, private groupDetailService: GroupDetailService, private router: Router, private route: ActivatedRoute, private http: HttpClient, private getipService: GetipService, private authService: AuthService) { }

  ngOnInit() {
  }

  onSend() {
    const resultJson = {
      groupId: this.groupDetailService.getGroupId(),
      subject: this.subject,
      text: this.text + "\n -- \n " + this.authService.getName() + " " + this.authService.getEmail()
    }

    console.log(resultJson);
    this.http.post('http://' + this.getipService.getip() + ':5000/api/sendEmail', resultJson).subscribe((res: any) => {
      console.log(res);
      if(res.message === "Email Sent! :)"){
        this.modalRef.hide();
      }
    });
  }

}

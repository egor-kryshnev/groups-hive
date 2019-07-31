import { PeopleGroup } from './../../../peopleGroup.model';
import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { GroupDetailService } from '../../group-detail.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-modal-change-avatar-person',
  templateUrl: './modal-change-avatar-person.component.html',
  styleUrls: ['./modal-change-avatar-person.component.css']
})
export class ModalChangeAvatarPersonComponent implements OnInit {
  @Input() title: string;
  @Input() person: PeopleGroup;
  @Input() personIndex: number;

  constructor(public modalRef: BsModalRef, private groupDetailService: GroupDetailService, private authService: AuthService) { }

  imgNumber: number = 1;
  imgPath: string = "assets/img/people/person1.png";

  ngOnInit() {
    console.log(this.title);
    console.log(this.person);
    console.log(this.personIndex);
    
  }

  onForward() {
    if(this.imgNumber === 9){
      this.imgNumber = 1;
    } else {
      this.imgNumber++;
    }
    console.log(this.imgNumber);
    this.imgPath = "assets/img/people/person" + this.imgNumber + ".png";
  }

  onBack() {
    if(this.imgNumber === 1){
      this.imgNumber = 9;
    } else {
      this.imgNumber--;
    }
    console.log(this.imgNumber);
    this.imgPath = "assets/img/people/person" + this.imgNumber + ".png";
  }

  onSaveAvatar() {
    this.person.user.avatarPath = this.imgPath;
    this.groupDetailService.updateAvatarOfPerson(this.person, this.personIndex);
    this.authService.setAvatarPathLocal(this.imgPath);
    this.modalRef.hide();
    // window.location.reload();
  }

}

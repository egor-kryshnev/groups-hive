// import { PeopleGroup } from './../../../peopleGroup.model';
import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AuthService } from 'src/app/auth/auth.service';
// import { GroupDetailService } from '../../group-detail.service';

@Component({
  selector: 'app-modal-change-avatar-account',
  templateUrl: './modal-change-avatar-account.component.html',
  styleUrls: ['./modal-change-avatar-account.component.css']
})
export class ModalChangeAvatarAccountComponent implements OnInit {
  @Input() imgPath: string;
  @Input() title: string;
  

  constructor(public modalRef: BsModalRef, public authService: AuthService ) { }

  imgNumber: number = 1;
  // imgPath: string = "assets/img/people/person1.png";

  ngOnInit() {
    // console.log(this.title);
    // console.log(this.personIndex);
    
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
    if(this.authService.setAvatarPath(this.imgPath)){
      this.modalRef.hide();
    }
    
    // this.groupDetailService.updateAvatarOfPerson(this.person, this.personIndex);
    setTimeout(() => {
      this.modalRef.hide();
      // window.location.reload();
    }, 200);
  }

}

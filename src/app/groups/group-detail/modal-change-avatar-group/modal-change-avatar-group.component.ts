import { GroupDetailService } from './../group-detail.service';
import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-change-avatar-group',
  templateUrl: './modal-change-avatar-group.component.html',
  styleUrls: ['./modal-change-avatar-group.component.css']
})
export class ModalChangeAvatarGroupComponent implements OnInit {
  imgNumber: number = 1;
  
  constructor(public modalRef: BsModalRef, private groupDetailService: GroupDetailService) { }
  // imgPath: string = this.groupDetailService.getGroupImagePath();
  imgPath: string = "assets/img/default1.png";
  
  ngOnInit() {

  }

  onForward() {
    if(this.imgNumber === 10){
      this.imgNumber = 1;
    } else {
      this.imgNumber++;
    }
    this.imgPath = "assets/img/default" + this.imgNumber + ".png";
  }

  onBack() {
    if(this.imgNumber === 1){
      this.imgNumber = 10;
    } else {
      this.imgNumber--;
    }
    this.imgPath = "assets/img/default" + this.imgNumber + ".png";
  }

  onSaveImage() {
    this.groupDetailService.updateImgGroup(this.imgPath);
    this.modalRef.hide();
    // window.location.reload();
  }
}

import { AuthService } from './../../auth/auth.service';
import { GetipService } from './../../getip.service';
import { HttpClient } from '@angular/common/http';
import { GroupDetailService } from './../../groups/group-detail/group-detail.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation, ElementRef, AfterViewInit } from '@angular/core';
import { ModalChangeAvatarAccountComponent } from './modal-change-avatar-account/modal-change-avatar-account.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  backgrounds = ['background1.jpg','background2.jpg', 'background3.jpg', 'background4.jpg', 'background5.jpg'];

  constructor(private route: ActivatedRoute, private router: Router, private groupDetailService: GroupDetailService, private elementRef: ElementRef, private http: HttpClient, private getipService: GetipService, public authService: AuthService, private modalRef: BsModalRef, private modalService: BsModalService) { }

  ngOnInit() {

    /** Shraga */
    // this.http.get('http://' + this.getipService.getip() + ':4200/user').subscribe((res: any[]) => {
    //   this.authService.login(res);
    //   console.log(this.authService.getUser());
    // });

    /** Angular */
    this.authService.login("dasd");
  }

  onHome() {
    // this.elementRef.nativeElement.ownerDocument.body.style.background = 'url(assets/img/backgrounds/background2.jpg) no-repeat center center fixed';
    this.groupDetailService.cleanGroup();
    this.router.navigate(['/'], { relativeTo: this.route });
  }

  onChooseBackground(background){
    this.elementRef.nativeElement.ownerDocument.body.style.background = 'url(assets/img/backgrounds/' + background + ') no-repeat center center fixed';
  }

  onChangeAvatar() {
    this.modalRef = this.modalService.show(ModalChangeAvatarAccountComponent,  {
      initialState: {
        title: 'Change Avatar Of Account',
        imgPath: this.authService.getAvatarPath()
      }
    });
  }

}

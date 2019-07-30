import { AuthService } from './../../auth/auth.service';
import { GetipService } from './../../getip.service';
import { HttpClient } from '@angular/common/http';
import { GroupDetailService } from './../../groups/group-detail/group-detail.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  backgrounds = ['background1.jpg','background2.jpg', 'background3.jpg', 'background4.jpg', 'background5.jpg'];

  constructor(private route: ActivatedRoute, private router: Router, private groupDetailService: GroupDetailService, private elementRef: ElementRef, private http: HttpClient, private getipService: GetipService, private authService: AuthService) { }

  ngOnInit() {

    /** Shraga */
    // this.http.get('http://' + this.getipService.getip() + ':4200/user').subscribe((res: any[]) => {
    //   this.authService.login(res);
    //   console.log(this.authService.getUser());
    // });

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

}

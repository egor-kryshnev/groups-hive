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

  constructor(private route: ActivatedRoute, private router: Router, private groupDetailService: GroupDetailService, private elementRef: ElementRef) { }

  ngOnInit() {
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

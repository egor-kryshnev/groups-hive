import { GroupDetailService } from './../../groups/group-detail/group-detail.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private groupDetailService: GroupDetailService) { }

  ngOnInit() {
  }

  onHome() {
    this.groupDetailService.cleanGroup();
    this.router.navigate(['/'], { relativeTo: this.route });
  }

}

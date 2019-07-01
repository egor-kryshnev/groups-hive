import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Group } from '../group.model';

@Component({
  selector: 'app-group-item',
  templateUrl: './group-item.component.html',
  styleUrls: ['./group-item.component.css']
})
export class GroupItemComponent implements OnInit {
  @Input() name: string;
  @Input() group: Group;
  @Input() id: string;
  private check: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  onChooseGroup() {
    // this.check = !this.check;
    // this.location.back();
    console.log(this.route);
    
    // this.router.navigate([this.id], { relativeTo: this.route });
    
  }

}

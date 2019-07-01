import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-person-group',
  templateUrl: './person-group.component.html',
  styleUrls: ['./person-group.component.css']
})
export class PersonGroupComponent implements OnInit {
  @Input() nameToAdd: string;

  constructor() { }

  ngOnInit() {
  }

}

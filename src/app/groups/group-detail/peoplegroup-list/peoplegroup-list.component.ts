import { GroupDetailService } from './../group-detail.service';
import { Component, OnInit, Input } from '@angular/core';
import { PeopleGroup } from '../../peopleGroup.model';

@Component({
  selector: 'app-peoplegroup-list',
  templateUrl: './peoplegroup-list.component.html',
  styleUrls: ['./peoplegroup-list.component.css']
})
export class PeoplegroupListComponent implements OnInit {
  @Input() people: PeopleGroup[];
  @Input() namePersonSearch: string;
  @Input() admin: boolean;

  constructor(private groupDetailService: GroupDetailService) { }

  ngOnInit() {
    this.people = this.groupDetailService.getPeople();
    // console.log("asdasd");
    
    // console.log(this.people);
    // console.log(this.groupDetailService.getPeople());
    
    
  }

  checkValue(index){
    this.people[index].admin = !this.people[index].admin;
    console.log(this.people[index].admin);
    this.groupDetailService.updatePeopleGroup(this.people);
    // this.groupDetailService.updateGroup();
    
  }

  onRemove(index){
    this.people.splice(index, 1);
    this.groupDetailService.updatePeopleGroup(this.people);
  }

}

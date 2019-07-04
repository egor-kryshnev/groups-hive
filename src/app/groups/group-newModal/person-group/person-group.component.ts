import { PersonGroupService } from './person-group.service';
import { Component, OnInit, Input } from '@angular/core';
import { PeopleGroup } from '../../peopleGroup.model';

@Component({
  selector: 'app-person-group',
  templateUrl: './person-group.component.html',
  styleUrls: ['./person-group.component.css']
})
export class PersonGroupComponent implements OnInit {
  @Input() nameToAdd: string;
  @Input() person: PeopleGroup;
  @Input() indexPerson;

  disabled = false;

  heightCard = "140px";
  widthCard = "140px";

  constructor(private personGroupService: PersonGroupService) { }

  ngOnInit() {
    // console.log(this.personGroupService.getPeople());
  }

  onRemoveFromList(person) {
    // let index = this.peopleToAdd.indexOf(person);
    // this.peopleToAdd.splice(index, 1);

    // if(!this.people) 
    //   this.people = [person];
    // else this.people.push(person);

    console.log("remove");
    

    this.personGroupService.removeFromPeopleToAdd(person);
    this.personGroupService.addPeople(person);
  }

  onAdminPerson(index){
    // this.peopleToAdd[index].admin = !this.peopleToAdd[index].admin;
    this.personGroupService.makeAdminPersonToAdd(index);
    
  }

  

  onMakeLittleCard() {
    this.disabled = !this.disabled;
  }

}

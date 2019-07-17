import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AuthService } from './../../../auth/auth.service';
import { GroupDetailService } from './../group-detail.service';
import { Component, OnInit, Input } from '@angular/core';
import { PeopleGroup } from '../../peopleGroup.model';
import { GroupNewModalComponent } from '../../group-newModal/group-newModal.component';

@Component({
  selector: 'app-peoplegroup-list',
  templateUrl: './peoplegroup-list.component.html',
  styleUrls: ['./peoplegroup-list.component.css']
})
export class PeoplegroupListComponent implements OnInit {
  @Input() people: PeopleGroup[];
  @Input() namePersonSearch: string;
  @Input() admin: boolean;

  modalRef: BsModalRef;

  constructor(private groupDetailService: GroupDetailService, private authService: AuthService, private modalService: BsModalService) { }

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


  onAddPerson(){
    this.modalRef = this.modalService.show(GroupNewModalComponent,  {
      initialState: {
        title: 'Add People To Group',
        addPeople: true,
        nameGroup: this.groupDetailService.getGroupName(),
        description: this.groupDetailService.getgroupDescription()
      }
    });
  } 

}

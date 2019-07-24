import { GroupDetailService } from './../group-detail/group-detail.service';
import { GetipService } from './../../getip.service';
import { PersonGroupService } from './person-group/person-group.service';
import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { PeopleGroup } from '../peopleGroup.model';
import { People } from '../people.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-group-newModal',
  templateUrl: './group-newModal.component.html',
  styleUrls: ['./group-newModal.component.css']
})
export class GroupNewModalComponent implements OnInit {
  // private people: People[];
  title: string;
  addPeople: boolean;

  public inputName: string;
  public nameGroup: string;
  public description: string = "";
  // private peopleToAdd: PeopleGroup[];

  // heightCard = "140px";
  // widthCard = "140px";

  selectedFile: File = null;


  constructor( public modalRef: BsModalRef, private http: HttpClient, private router: Router, private route: ActivatedRoute, private authService: AuthService, private personGroupService: PersonGroupService, private getipService: GetipService, private groupDetailService: GroupDetailService ) { }

  ngOnInit() {
    this.http.get('https://groups-3fd03.firebaseio.com/people.json').subscribe((res: any[]) => {
      console.log(res);
      
      // this.people = res;

      this.personGroupService.setPeople(res);

      let people = this.personGroupService.getPeople();
      // let peopleinsideGroup = this.groupDetailService.getPeople();
      
    });



  }

  onChoosePerson(person) {

    console.log("choose");
    
    this.personGroupService.addPeopleToAdd(person);
    this.personGroupService.removeFromPeople(person);
    this.inputName = "";
    
  }

  checking(str) {
    if(!this.inputName || this.inputName.length < 3 || str === this.authService.getAcc().user.name) return false;

    if(str.toUpperCase().substr(0, this.inputName.length).indexOf(this.inputName.toUpperCase()) >= 0){
      // console.log(true);
      return true;
    } else {
      return false;
    }  
  }

  onSubmit() {
    console.log(this.description);
    
    if(!this.addPeople){
      this.onCreateGroup();
    } else {
      this.onAddPeopleToGroup();
    }
  }

  onCreateGroup() {
    let img = Math.floor(Math.random() * (10 - 1 + 1) ) + 1;

    console.log(img);
    console.log(this.personGroupService.getPeopleToAdd());

    // this.personGroupService.addAdminPeopleToAdd(this.authService.getAcc());
    this.personGroupService.addMyAccountPeopleToAdd(this.authService.getAcc());
    
    console.log(this.personGroupService.getPeopleToAdd());

    var resGroup = {
      name: this.nameGroup,
      people: this.personGroupService.getPeopleToAdd(),
      imgPath: "assets/img/default" + img + ".png",
      description: this.description
    };

    console.log(resGroup);
    
    
    this.http.post('http://' + this.getipService.getip() + ':5000/api/createGroup', resGroup).subscribe((res: any[]) => {
      console.log(res);      
    });

    this.inputName = "";
    this.nameGroup = "";

    this.personGroupService.cleanPeopleToAdd();
    
    this.modalRef.hide();
    window.location.reload();
  }

  onAddPeopleToGroup() {
    let people: PeopleGroup[] = this.groupDetailService.getPeople();
    Array.prototype.push.apply(people, this.personGroupService.getPeopleToAdd());
    this.groupDetailService.updatePeopleGroup(people);
    this.modalRef.hide();
  }

  onFileSelected(event){
    // console.log(event);
    this.selectedFile = <File>event.target.files[0];
  }

  onCloseModal(){
    this.personGroupService.cleanPeopleToAdd();
    this.modalRef.hide();
  }

  isInvalidInputName() {
    return this.addPeople;
  }

}

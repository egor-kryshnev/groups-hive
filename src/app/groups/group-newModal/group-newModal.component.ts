import { GroupDetailService } from './../group-detail/group-detail.service';
import { GetipService } from './../../getip.service';
import { PersonGroupService } from './person-group/person-group.service';
import { AuthService } from './../../auth/auth.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { PeopleGroup } from '../peopleGroup.model';
import { Router, ActivatedRoute } from '@angular/router';
import { fromEvent, of } from 'rxjs';
import {
  debounceTime,
  map,
  distinctUntilChanged,
  filter
} from "rxjs/operators";
import { People } from '../people.model';

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

  @ViewChild('searchPeople', { read: ElementRef }) searchPeople: ElementRef;
  isSearching:boolean;
  people: People[];

  // private peopleToAdd: PeopleGroup[];

  // heightCard = "140px";
  // widthCard = "140px";

  selectedFile: File = null;


  constructor( public modalRef: BsModalRef, private http: HttpClient, private router: Router, private route: ActivatedRoute, private authService: AuthService, public personGroupService: PersonGroupService, private getipService: GetipService, private groupDetailService: GroupDetailService ) { }

  ngOnInit() {
    // this.http.get('https://groups-3fd03.firebaseio.com/people.json').subscribe((res: any[]) => {
    //   console.log(res);

    //   this.personGroupService.setPeople(res);

    //   let people = this.personGroupService.getPeople();

    // });

    fromEvent(this.searchPeople.nativeElement, 'keyup').pipe(
      // get value
      map((event: any) => {
        return event.target.value;
      })
      // if character length greater then 2
      ,filter(res => res.length > 2)
      // Time in milliseconds between key events
      ,debounceTime(1000)
      // If previous query is diffent from current
      ,distinctUntilChanged()
      // subscription for response
      ).subscribe((text: string) => {
        this.isSearching = true;
        this.searchGetCall(text).subscribe((res: any[])=>{
          console.log('res',res);
          this.isSearching = false;
          this.personGroupService.setPeople(res);
          this.people = this.personGroupService.getPeople();
          console.log(this.people);
        },(err)=>{
          this.isSearching = false;
          console.log('error',err);
        });
      });



  }

  searchGetCall(term: string) {
    if (term === '') {
      return of([]);
    }
    console.log('byuser', term);
    return this.http.get('http://localhost:5000/api/getuserByName/' + term);
  }

  onChoosePerson(person) {

    console.log("choose");

    this.personGroupService.addPeopleToAdd(person);
    this.personGroupService.removeFromPeople(person);
    this.inputName = "";

  }

  checking(str) {
    if(!this.inputName || this.inputName.length < 3 || str === this.authService.getAcc().fullName) return false;

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

    var myacc = {
      user: this.authService.getAcc(),
      admin: true
    }
    // this.personGroupService.addAdminPeopleToAdd(myacc);
    this.personGroupService.addMyAccountPeopleToAdd(myacc);

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

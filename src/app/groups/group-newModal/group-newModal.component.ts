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
  private people: People[];
  public inputName: string;
  public nameGroup: string;
  private peopleToAdd: PeopleGroup[];

  selectedFile: File = null;

  title;

  constructor( public modalRef: BsModalRef, private http: HttpClient, private router: Router, private route: ActivatedRoute, private authService: AuthService ) { }

  ngOnInit() {
    this.http.get('https://groups-3fd03.firebaseio.com/people.json').subscribe((res: any[]) => {
      console.log(res);
      
      this.people = res;
      // let acc = {
      //   name: this.authService.getAcc().name,
      //   number: this.authService.getAcc().number
      // };
      // let index = this.people.findIndex(i => { console.log(i === acc)});
      
      // console.log(this.people);
      // console.log(acc);
      // console.log(index);
      
    });

  }

  onChoosePerson(person) {

    person.admin = false;

    if(!this.peopleToAdd) 
      this.peopleToAdd = [person];
    else this.peopleToAdd.push(person);
    console.log(this.peopleToAdd);
    let index = this.people.indexOf(person);
    this.people.splice(index, 1);
    
  }

  onRemoveFromList(person) {
    let index = this.peopleToAdd.indexOf(person);
    this.peopleToAdd.splice(index, 1);

    if(!this.people) 
      this.people = [person];
    else this.people.push(person);
  }

  checking(str) {
    if(!this.inputName || this.inputName.length < 3 || str === this.authService.getAcc().name) return false;

    if(str.toUpperCase().substr(0, this.inputName.length).indexOf(this.inputName.toUpperCase()) >= 0){
      // console.log(true);
      return true;
    } else {
      return false;
    }  
  }

  onSubmit() {

    let img = Math.floor(Math.random() * (10 - 1 + 1) ) + 1;

    console.log(img);
    console.log(this.peopleToAdd);

    if(!this.peopleToAdd) 
      this.peopleToAdd = [this.authService.getAcc()];
    else this.peopleToAdd.push(this.authService.getAcc());

    var resGroup = {
      name: this.nameGroup,
      people: this.peopleToAdd,
      imgPath: "assets/img/default" + img + ".png"
    };

    console.log(resGroup);
    
    // this.http.post('http://localhost:5000/createGroup', resGroup).subscribe((res: any[]) => {
    // this.http.post('http://localhost:5000/api/createGroup', resGroup).subscribe((res: any[]) => {
    this.http.post('http://13.79.165.38:5000/api/createGroup', resGroup).subscribe((res: any[]) => {
      console.log(res);      
    });

    this.inputName = "";
    this.nameGroup = "";
    this.peopleToAdd.splice(0, this.peopleToAdd.length);
    
    this.router.navigate(['/'], { relativeTo: this.route });
  }

  onFileSelected(event){
    // console.log(event);
    this.selectedFile = <File>event.target.files[0];
  }

  onUpload() {
    
  }

  onAdminPerson(index){
    this.peopleToAdd[index].admin = !this.peopleToAdd[index].admin;
    
  }

}

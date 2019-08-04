import { AuthService } from './../../auth/auth.service';
import { GetipService } from './../../getip.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Group } from './../group.model';
import { Injectable } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Injectable()
export class GroupDetailService {
  private group: Group;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private getipService: GetipService, private authService: AuthService) { }

  setGroup(group){
    this.group = group;    
  }

  getPeople(){
    return this.group.people;
  }

  existGroup(){
    if(this.group){
      return true;
    } else {
      return false;
    }
  }

  getGroup() {
    return this.group;
  }

  getGroupId() {
    return this.group._id;
  }

  getGroupName() {
    return this.group.name;
  }

  getGroupImagePath() {
    return this.group.imgPath;
  }

  getGroupDescription() {
    return this.group.description;
  }

  updateGroup(name, people, imgPath) {
    this.group = name;
    this.group.people = people;

    this.http.put('http://' + this.getipService.getip() + ':5000/api/updateGroup', this.group).subscribe((res: any) => {
      console.log(res);
      
    });
  }

  updatePeopleGroup(people){
    this.group.people = people;

    this.http.put('http://' + this.getipService.getip() + ':5000/api/updateGroup', this.group).subscribe((res: any) => {
      console.log(res);
    });
  }

  updateAvatarOfPerson(person, index){
    this.group.people[index] = person;
    
    console.log(this.group);

    this.http.put('http://' + this.getipService.getip() + ':5000/api/updateGroup', this.group).subscribe((res: any) => {
      console.log(res);
    });
  }

  updateNameGroup(name){
    this.group.name = name;

    console.log(this.group);
    

    this.http.put('http://' + this.getipService.getip() + ':5000/api/updateGroup', this.group).subscribe((res: any) => {
      console.log(res);
      
    });
  }

  updateDescriptionGroup(description) {
    this.group.description = description;

    console.log(this.group);
    

    this.http.put('http://' + this.getipService.getip() + ':5000/api/updateGroup', this.group).subscribe((res: any) => {
      console.log(res);
    });
  }

  leaveGroup(modalRef: BsModalRef){
    let name = this.authService.getAcc().fullName;
    console.log(name);    
    let result = this.group.people.filter( el => {
      return el.user.fullName === name;
    });

    if(result.length > 0){
      this.group.people.splice(this.group.people.indexOf(result[0]), 1);
      this.http.put('http://' + this.getipService.getip() + ':5000/api/updateGroup', this.group).subscribe((res: any) => {
        if(res.message === "Group updated!"){
          modalRef.hide();
          this.router.navigate([''], {relativeTo: this.route});
        }
      });
    }
  }

  updateImgGroup(imgPath){
    this.group.imgPath = imgPath;
    
    console.log(this.group);
    
    this.http.put('http://' + this.getipService.getip() + ':5000/api/updateGroup', this.group).subscribe((res: any) => {
      console.log(res);
      
    });
  }

  removeGroup() {
    const data = {
      _id: this.group._id
    };
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      body: data
    }
    this.http.delete('http://' + this.getipService.getip() + ':5000/api/deleteGroup', httpOptions).subscribe((res: any) => {
      console.log(res);

      
      if(res.message === 'Deleted!'){      
        this.group = undefined;
        this.router.navigate([''], {relativeTo: this.route});
      }
    });
  }

  cleanGroup() {
    this.group = null;
  }

}

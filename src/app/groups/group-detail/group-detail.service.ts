import { HttpClient } from '@angular/common/http';
import { People } from './../people.model';
import { Group } from './../group.model';
import { Injectable } from '@angular/core';

@Injectable()
export class GroupDetailService {
  private group: Group;

  constructor(private http: HttpClient) { }

  setGroup(group){
    this.group = group;
    // console.log(this.group);
    
  }

  getPeople(){
    // console.log(this.group.people);
    
    return this.group.people;
  }

  existGroup(){
    if(this.group){
      return true;
    } else {
      return false;
    }
  }

  getGroupName() {
    return this.group.name;
  }

  updateGroup(name, people) {
    this.group = name;
    this.group.people = people;

    this.http.put('http://localhost:5000/api/updateGroup', this.group).subscribe((res: any) => {
      console.log(res);
      
    });
  }

  updatePeopleGroup(people){
    this.group.people = people;

    this.http.put('http://localhost:5000/api/updateGroup', this.group).subscribe((res: any) => {
      console.log(res);
      
    });
  }

  updateNameGroup(name){
    this.group = name;

    this.http.put('http://localhost:5000/api/updateGroup', this.group).subscribe((res: any) => {
      console.log(res);
      
    });
  }

}

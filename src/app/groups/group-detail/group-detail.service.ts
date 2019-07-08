import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { People } from './../people.model';
import { Group } from './../group.model';
import { Injectable } from '@angular/core';

@Injectable()
export class GroupDetailService {
  private group: Group;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

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
    this.group.name = name;

    console.log(this.group);
    

    this.http.put('http://localhost:5000/api/updateGroup', this.group).subscribe((res: any) => {
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
    this.http.delete('http://localhost:5000/api/deleteGroup', httpOptions).subscribe((res: any) => {
      console.log(res);

      
      if(res.message === 'Deleted!'){      
        this.group = undefined;
        this.router.navigate([''], {relativeTo: this.route});
      }
    });
  }

}

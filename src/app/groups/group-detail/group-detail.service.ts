import { GetipService } from './../../getip.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { People } from './../people.model';
import { Group } from './../group.model';
import { Injectable } from '@angular/core';

@Injectable()
export class GroupDetailService {
  private group: Group;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private getipService: GetipService) { }

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

  getGroupImagePath() {
    return this.group.imgPath;
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

  updateNameGroup(name){
    this.group.name = name;

    console.log(this.group);
    

    this.http.put('http://' + this.getipService.getip() + ':5000/api/updateGroup', this.group).subscribe((res: any) => {
      console.log(res);
      
    });
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

}

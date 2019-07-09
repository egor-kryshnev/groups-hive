import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { People } from '../../people.model';
import { PeopleGroup } from '../../peopleGroup.model';

@Injectable()
export class PersonGroupService {
    private people: People[];
    private peopleToAdd: PeopleGroup[];

    constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {}

    setPeople(arr: any[]){
        this.people = arr;
    }

    getPeople(){
        return this.people;
    }

    getPeopleToAdd(){
        return this.peopleToAdd;
    }

    addPeopleToAdd(person) {

        person.admin = false;
        person.avatarPath = "assets/img/guest.png";

        if(!this.peopleToAdd) 
            this.peopleToAdd = [person];
        else this.peopleToAdd.push(person);

        console.log(this.peopleToAdd);
    }

    addAdminPeopleToAdd(person) {

        person.admin = true;
        person.avatarPath = "assets/img/guest.png";

        if(!this.peopleToAdd) 
            this.peopleToAdd = [person];
        else this.peopleToAdd.push(person);

        console.log(this.peopleToAdd);
    }

    removeFromPeopleToAdd(person) {
        let index = this.peopleToAdd.indexOf(person);
        this.peopleToAdd.splice(index, 1);

        console.log(this.peopleToAdd);
    }

    cleanPeopleToAdd() {
        if(this.peopleToAdd){
            this.peopleToAdd.splice(0, this.peopleToAdd.length);
        }
    }

    makeAdminPersonToAdd(index) {
        console.log(this.peopleToAdd[index]);        
        this.peopleToAdd[index].admin = !this.peopleToAdd[index].admin;
        console.log(this.peopleToAdd[index]);
        
    }

    checkAdminPersonToAdd(index) {
        return this.peopleToAdd[index].admin;
    }

    addPeople(person) {
        if(!this.people) 
            this.people = [person];
        else this.people.push(person);

        console.log(this.people);
    }

    removeFromPeople(person) {
        let index = this.people.indexOf(person);
        this.people.splice(index, 1);

        console.log(this.people);
    }


}
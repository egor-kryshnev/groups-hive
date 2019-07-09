import { PeopleGroup } from './peopleGroup.model';
import { Injectable } from '@angular/core';

@Injectable()
export class Group {
    public _id: string;
    public name: string;
    public people: PeopleGroup[];
    public imgPath: string;
    
    constructor(name: string, people: PeopleGroup[], _id: string, imgPath: string) {
        this.name = name;
        this.people = people;
        this._id = _id;
        this.imgPath = imgPath;
    }
}
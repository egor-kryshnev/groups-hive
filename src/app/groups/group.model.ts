import { People } from './people.model';
import { Injectable } from '@angular/core';

@Injectable()
export class Group {
    public _id: string;
    public name: string;
    public people: People[];
    
    constructor(name: string, people: People[], _id: string) {
        this.name = name;
        this.people = people;
        this._id = _id;
    }
}
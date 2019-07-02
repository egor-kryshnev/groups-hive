import { Injectable } from '@angular/core';

@Injectable()
export class PeopleGroup {
    public name: string;
    public number: string;
    public admin: Boolean;
    
    constructor(name: string, number: string, admin: Boolean) {
        this.name = name;
        this.number = number;
        this.admin = admin;
    }
}
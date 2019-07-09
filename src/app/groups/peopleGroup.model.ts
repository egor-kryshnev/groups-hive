import { Injectable } from '@angular/core';

@Injectable()
export class PeopleGroup {
    public name: string;
    public number: string;
    public admin: Boolean;
    public avatarPath: string;
    
    constructor(name: string, number: string, admin: Boolean, avatarPath: string) {
        this.name = name;
        this.number = number;
        this.admin = admin;
        this.avatarPath = avatarPath;
    }
}
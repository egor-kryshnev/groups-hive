import { async } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { People } from './people.model';

@Injectable()
export class PeopleGroup {
    // public user: {
    //     _id: string,
    //     name: string,
    //     number: string,
    //     email: string,
    //     avatarPath: string
    // };
    public user: People;
    public admin: boolean;
    
    constructor(user: People, admin: boolean) {
        this.user = user;
        // this.user._id = _id;
        // this.user.name = name;
        // this.user.number = number;
        // this.user.email = email;
        this.admin = admin;
        // this.user.avatarPath = avatarPath;
    }
}
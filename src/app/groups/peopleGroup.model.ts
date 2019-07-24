import { async } from '@angular/core/testing';
import { Injectable } from '@angular/core';

@Injectable()
export class PeopleGroup {
    public user: {
        _id: string,
        name: string,
        number: string,
        email: string,
        avatarPath: string
    };
    public admin: Boolean;
    
    constructor(_id: string, name: string, number: string, email: string, admin: Boolean, avatarPath: string) {
        this.user = {
            _id: _id,
            name: name,
            number: number,
            email: email,
            avatarPath: avatarPath
        };
        // this.user._id = _id;
        // this.user.name = name;
        // this.user.number = number;
        // this.user.email = email;
        this.admin = admin;
        // this.user.avatarPath = avatarPath;
    }
}
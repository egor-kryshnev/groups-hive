import { Injectable } from '@angular/core';

@Injectable()
export class PeopleDb {
    public _id: string;
    public name: string;
    public number: string;
    public avatarPath: string;
    public email: string;

    constructor(_id: string, name: string, number: string, avatarPath: string, email: string) {
        this._id = _id;
        this.name = name;
        this.number = number;
        this.avatarPath = avatarPath;
        this.email = email;
    }
}
import { Injectable } from '@angular/core';

@Injectable()
export class People {
    public _id: string;
    public name: string;
    public number: string;
    public email: string;

    constructor(_id: string, name: string, number: string, email: string) {
        this._id = _id;
        this.name = name;
        this.number = number;
        this.email = email;
    }
}
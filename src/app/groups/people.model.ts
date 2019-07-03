import { Injectable } from '@angular/core';

@Injectable()
export class People {
    public name: string;
    public number: string;

    constructor(name: string, number: string) {
        this.name = name;
        this.number = number;
    }
}
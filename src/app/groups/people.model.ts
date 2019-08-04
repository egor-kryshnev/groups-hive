import { Injectable } from '@angular/core';

@Injectable()
export class People {
    // public _id: string;
    // public name: string;
    // public number: string;
    // public email: string;

    // constructor(_id: string, name: string, number: string, email: string) {
    //     this._id = _id;
    //     this.name = name;
    //     this.number = number;
    //     this.email = email;
    // }
    
    public _id: string;
    public fullName: string;
    public personalNumber: string;
    public hierarchy: string[];
    public primaryDomainUser: DomainUser;
    public secondaryDomainUsers: DomainUser[];
    public mail: string;
    public avatarPath: string;

    constructor(_id: string, fullName: string, personalNumber: string, hierarchy: string[], primaryDomainUser: DomainUser, secondaryDomainUsers: DomainUser[], mail: string, avatarPath: string) {
        this._id = _id;
        this.fullName = fullName;
        this.personalNumber = personalNumber;
        this.hierarchy = hierarchy;
        this.primaryDomainUser = primaryDomainUser;
        this.secondaryDomainUsers = secondaryDomainUsers;
        this.mail = mail;
        this.avatarPath = avatarPath;
    }
}


class DomainUser {
    public adfsUID: string;
    public uniqueID: string;

    constructor(adfsUID: string, uniqueID: string){
        this.adfsUID = adfsUID;
        this.uniqueID = uniqueID;
    }
}
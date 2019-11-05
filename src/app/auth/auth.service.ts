import { PeopleDb } from './../core/header/peopleDb.model';
import { People } from './../groups/people.model';
import { GetipService } from 'src/app/getip.service';
import { PeopleGroup } from './../groups/peopleGroup.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class AuthService {
    // private user = new PeopleDb('', '', '', '', '');
    private user = new People('','','',['',''],[{ adfsUID: '', uniqueID: ''}],'', '');
    constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router, private getipService: GetipService) {}

    login(user) {

        console.log(user);
        /** Shraga */
        // this.user = new People(user.id, user.displayName, '111111', [''], { adfsUID: 'first@sadasd', uniqueID: 'first@fdsfl.idf'}, [{ adfsUID: 'first@fgh', uniqueID: 'first@fgh.idf'}], user.mail, "assets/img/guest.png");
        // this.http.post('http://' + this.getipService.getip() + ':5000/api/checkUser', this.user).subscribe((res: any) => {
        //     if(res != { message: "User created!" }){
        //         this.user = new People(res._id, res.fullName, res.personalNumber, res.hierarchy, res.primaryDomainUser, res.secondaryDomainUsers, res.mail, res.avatarPath);
        //     }
        // });

        /** Angular */
        this.user = new People('5d2594e36fcb691a0d178a71', 'first', '111111', ['aman', 'modiin'], [{ adfsUID: 'first@fgh', uniqueID: 'first@fgh.idf'}, { adfsUID: 'first@qwe', uniqueID: 'first@qwe.idf'}], 'first@test.com', 'assets/img/guest.png');
        this.http.post('http://' + this.getipService.getip() + ':5000/api/checkUser', this.user).subscribe((res: any) => {
            console.log(res);
            if(res != { message: "User created!" }){
                this.user = new People(res._id, res.fullName, res.personalNumber, res.hierarchy, res.secondaryDomainUsers, res.mail, res.avatarPath);
            }
        });


    }

    logout() {
    }

    // public getId() {
    //     return this.user._id;
    // }

    // public getNumber() {
    //     return this.user.number;
    // }

    public getName() {
        // return this.user.name;
        return this.user.fullName;
    }

    public getId() {
        return this.user._id;
    }

    public getEmail() {
        // return this.user.email;
        return this.user.mail;
    }

    public getAvatarPath() {
        return this.user.avatarPath;
    }

    public setAvatarPath(avatar): boolean {
        this.user.avatarPath = avatar;
        this.http.put('http://' + this.getipService.getip() + ':5000/api/updateUser', this.user).subscribe((res: any) => {
            console.log(res);
            if(res === { message: "User Updated!" }){
                return true;
            } else {
                return false;
            }
        });
        return false;
    }

    public setAvatarPathLocal(avatar) {
        this.user.avatarPath = avatar;
    }

    public getUser(): People {
        return this.user;
    }

    public getAcc(): People {
        // let acc = new PeopleGroup('5d2594e36fcb691a0d178a71', 'first', '1', 'first@test.com', true, "assets/img/guest.png");

        // return acc;
        return this.user;
    }

    public getAccForGroup(): PeopleGroup {
        // let acc = new PeopleGroup(this.user._id, this.user.fullName, this.user.personalNumber, this.user.mail, true, this.user.avatarPath);
        let acc = new PeopleGroup(this.user, true);
        return acc;
    }

    public checkAdmin(people: PeopleGroup[]): boolean {
        // let acc = new PeopleGroup('5d2594e36fcb691a0d178a71', 'first', '1', 'first@test.com', true, "assets/img/guest.png");

        // var result = people.find( person => {
        //     return person.user.name === acc.user.name && person.admin === acc.admin;
        // });

        var result = people.find( person => {
            return person.user.fullName === this.user.fullName && person.admin;
        });

        if(result){
            return true;
        } else {
            return false;
        }
    }
}

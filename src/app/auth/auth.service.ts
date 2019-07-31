import { PeopleDb } from './../core/header/peopleDb.model';
import { GetipService } from 'src/app/getip.service';
import { PeopleGroup } from './../groups/peopleGroup.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class AuthService {
    private user = new PeopleDb('', '', '', '', '');
    constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router, private getipService: GetipService) {}

    login(user) {

        /** Shraga */
        // this.user = new PeopleDb(user.id, user.displayName, '14', "assets/img/guest.png", user.mail);
        // this.http.post('http://' + this.getipService.getip() + ':5000/api/checkUser', this.user).subscribe((res: any) => {
        //     if(res != { message: "User created!" }){
        //         this.user = new PeopleDb(res._id, res.name, res.number, res.avatarPath, res.email);
        //     }
        // });

        this.user = new PeopleDb('5d2594e36fcb691a0d178a71', 'first', '1','assets/img/guest.png' , 'first@test.com');
        this.http.post('http://' + this.getipService.getip() + ':5000/api/checkUser', this.user).subscribe((res: any) => {
            console.log(res);
            if(res != { message: "User created!" }){
                this.user = new PeopleDb(res._id, res.name, res.number, res.avatarPath, res.email);
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
        return this.user.name;
    }

    public getId() {
        return this.user._id;
    }

    public getEmail() {
        return this.user.email;
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

    public getUser(): PeopleDb {
        return this.user;
    }

    public getAcc(): PeopleDb {
        // let acc = new PeopleGroup('5d2594e36fcb691a0d178a71', 'first', '1', 'first@test.com', true, "assets/img/guest.png");
        
        // return acc;
        return this.user;
    }

    public getAccForGroup(): PeopleGroup {
        let acc = new PeopleGroup(this.user._id, this.user.name, this.user.number, this.user.email, true, this.user.avatarPath);
        
        return acc;
    }

    public checkAdmin(people: PeopleGroup[]): boolean {
        // let acc = new PeopleGroup('5d2594e36fcb691a0d178a71', 'first', '1', 'first@test.com', true, "assets/img/guest.png");

        // var result = people.find( person => {
        //     return person.user.name === acc.user.name && person.admin === acc.admin;
        // });
        
        var result = people.find( person => {
            return person.user.name === this.user.name && person.admin;
        });
        
        if(result){
            return true;
        } else {
            return false;
        }
    }
}
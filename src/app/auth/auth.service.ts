import { PeopleGroup } from './../groups/peopleGroup.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class AuthService {
    constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {}

    login(login: string, password: string) {
        // this.http.post('http://192.168.99.100:5000/authenticate', {login: login, password: password}).subscribe((resp: any) => {
        //     localStorage.setItem('auth_token', resp.token);
        //     localStorage.setItem('auth_login', resp.signed_user);
        //     this.router.navigate(['chat'], {relativeTo: this.route});
        // });
    }

    registr(login: string, password: string) {
        // this.http.post('http://192.168.99.100:5000/setupAcc', {login: login, password: password}).subscribe((resp: any) => {
        //     localStorage.setItem('auth_token', resp.token);
        //     localStorage.setItem('auth_login', resp.signed_user);
        //     this.router.navigate(['chat'], {relativeTo: this.route});
        // });
    }

    logout() {
        // localStorage.removeItem('auth_token');
        // localStorage.removeItem('auth_login');
    }

    // public logIn(): boolean {
        // return (localStorage.getItem('auth_token') !== null);
    // }

    // public getName(): string {
        // if(localStorage.getItem('auth_login')){
        // return localStorage.getItem('auth_login').toString();
        // }
    // }

    public getAcc(): PeopleGroup {
        let acc = new PeopleGroup('5d2594e36fcb691a0d178a71', 'first', '1', 'first@test.com', true, "assets/img/guest.png");
        return acc;
    }

    public checkAdmin(people: PeopleGroup[]): boolean {
        let acc = new PeopleGroup('5d2594e36fcb691a0d178a71', 'first', '1', 'first@test.com', true, "assets/img/guest.png");

        var result = people.find( person => {
            return person.user.name === acc.user.name && person.admin === acc.admin;
        });
        
        if(result){
            return true;
        } else {
            return false;
        }
    }
}
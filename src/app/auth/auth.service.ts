import { People } from './../groups/people.model';
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

    public getAcc(): People {
        let acc = new People('first', '1', true);
        return acc;
    }
}
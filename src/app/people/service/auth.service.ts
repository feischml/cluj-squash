import { Component, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { LclStorageService } from '../../lclstorage/lclstorage.service';
import 'rxjs/add/operator/map';
import { AppConstants} from '../../app.constants';
import { User } from '../model/users.model';

@Injectable()
export class AuthService{

    // Application Constants
    private appConstants;

    constructor(private _http: Http, 
                private lclStorage: LclStorageService){ 
        this.appConstants = new AppConstants();
    }

    // Login
    loginUser(username: String, password: String){
        var route = '/auth/login';
        var user = new User();
        user.username = username;
        user.password = password;
        return this._http.post(
                    this.appConstants.getServerUrl() + route, 
                    JSON.stringify(user), 
                    { headers: this.appConstants.getHeaders() }
                ).map(res => {
                    let loggedUser = res.json();
                    if (loggedUser) 
                        this.lclStorage.setItem(
                            AppConstants.LOGGED_USER,
                            JSON.stringify(loggedUser['user'])
                        );
                        this.lclStorage.setItem(
                            AppConstants.LOGGED_ADMIN,
                            JSON.stringify(loggedUser['admin'])
                        );
                    return loggedUser;
                });
    }

    // Logout
    logoutUser(){
        var route = '/auth/logout';
        return this._http.get(
                this.appConstants.getServerUrl() + route, 
                { headers: this.appConstants.getHeaders() }
            ).map(res => {
                // Clear lclstorage
                this.lclStorage.clear();
                return res;
            });
    }

}
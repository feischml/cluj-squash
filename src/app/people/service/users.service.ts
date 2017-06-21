import { Component, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppConstants} from '../../app.constants';
import { User } from '../model/users.model';

@Injectable()
export class UsersService{

    constructor(private _http: Http){ }

    registerUser(user: User){
        var route = '/users/register';
        var constants = new AppConstants();
        return this._http.post(
                    constants.getServerUrl() + route, 
                    JSON.stringify(user), 
                    { headers: constants.getHeaders() }
                ).map(res => res.json());
    }

}
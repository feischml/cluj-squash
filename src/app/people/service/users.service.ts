import { Component, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppConstants} from '../../app.constants';
import { User } from '../model/users.model';

@Injectable()
export class UsersService{

    // Application Constants
    private appConstants;

    constructor(private _http: Http){ 
        this.appConstants = new AppConstants();
    }

    // Register a new User
    registerUser(user: User){
        var route = '/users/register';
        return this._http.post(
                    this.appConstants.getServerUrl() + route, 
                    JSON.stringify(user), 
                    { headers: this.appConstants.getHeaders() }
                ).map(res => res.json());
    }

    // Get all Users (Admin mode)
    getAllUsers(){
        var route = '/users/users';
        return this._http.get(
            this.appConstants.getServerUrl() + route,
            { headers: this.appConstants.getHeaders() }
        ).map( users => users.json());
    }

    // Get User by ID
    getUserById(id: String){
        var route = "/users/userid/" + id;
        return this._http.get(
                this.appConstants.getServerUrl() + route,
                { headers: this.appConstants.getHeaders() }).
            map( user => user.json());  
    }

    // Update a User Account
    updateUser(user: User){
        var  route = '/users/update';  
        return this._http.put(
            this.appConstants.getServerUrl() + route, 
            JSON.stringify(user),
            { headers: this.appConstants.getHeaders() }
        ).map(res => res.json());
    }

    // Delete a User by Id
    deleteUser(user){
        var route = '/users/delete/';

        return this._http.delete(
            this.appConstants.getServerUrl() + route + user["_id"],
            { headers: this.appConstants.getHeaders() }
        ).map(res => res.json());
    }

}
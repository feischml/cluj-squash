import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppConstants} from '../../app.constants';
import { Role } from '../model/roles.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

@Injectable()
export class RolesService{

    // Application Constants
    private appConstants;

    constructor( private _http: Http ){
        this.appConstants = new AppConstants();
    }

    // Return the list of Roles from the server
    getRoles(): Observable<Role[]>{
        var route = '/roles/roles';
        return this._http.get(
                this.appConstants.getServerUrl() + route,
                { headers: this.appConstants.getHeaders() }).
            map(roles => roles.json());
    }

    // Return a role with a given id
    getRole(id: String): Observable<Role>{
        var route = '/roles/roleid/' + id;
        return this._http.get(
                this.appConstants.getServerUrl() + route,
                { headers: this.appConstants.getHeaders() }).
            map( role => role.json());        
    }

    // Update or create a role
    updateCreateRole(role: Role){
        var route;
        if (!role._id){
            route = '/roles/create';
            return this._http.post(
                    this.appConstants.getServerUrl() + route, 
                    JSON.stringify(role),
                    { headers: this.appConstants.getHeaders() }
                ).map(res => res.json());
        } else {
            route = '/roles/update';  
            return this._http.put(
                    this.appConstants.getServerUrl() + route, 
                    JSON.stringify(role),
                    { headers: this.appConstants.getHeaders() }
                ).map(res => res.json());
        }
    }

    // Delete Roles
    deleteRole(role: Role){
        var route = '/roles/delete/';
        if (role._id && !role.basic){ // if not BASIC role, only then delete it
            route = route + role._id;
            return this._http.delete(
                this.appConstants.getServerUrl() + route,
                { headers: this.appConstants.getHeaders() }
            ).map( res => res.json());
        } else {
            alert("BASIC Roles cannot be deleted!");
            return Observable.of(null).map( res => res ); // return null observable
        }
    }

}
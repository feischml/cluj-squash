import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppConstants} from '../../app.constants';
import { Role } from '../model/roles.model';

@Injectable()
export class RolesService{

    // Application Constants
    private appConstants;

    constructor( private _http: Http ){
        this.appConstants = new AppConstants();
     }

     // Return the list of Roles from the server
    getRoles(){
        var route = '/roles/roles';
        return this._http.get(
                this.appConstants.getServerUrl() + route,
                { headers: this.appConstants.getHeaders() }).
            map(roles => roles.json());
    }

    // Return a role with a given id
    getRole(id: String){
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

            console.log(this.appConstants.getServerUrl() + route + "   " + JSON.stringify(role));

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

}
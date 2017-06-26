import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppConstants} from '../../app.constants';
import { Association} from '../model/association.model';

@Injectable()
export class AssociationService{

    // Application Constants
    private appConstants;

    constructor( private _http: Http ){
        this.appConstants = new AppConstants();
     }

     // Return the list of Associations from the server
    getAssociations(){
        var route = '/associations/associations';
        return this._http.get(
                this.appConstants.getServerUrl() + route,
                { headers: this.appConstants.getHeaders() }).
            map(roles => roles.json());
    }

    // Return an Association with a given id
    getAssociation(id: String){
        var route = '/associations/associationid/' + id;
        return this._http.get(
                this.appConstants.getServerUrl() + route,
                { headers: this.appConstants.getHeaders() }).
            map( role => role.json());        
    }

    // Update or create an Association
    updateCreateAssociation(association: Association){
        var route;
        if (!association._id){
            route = '/associations/create';
            return this._http.post(
                    this.appConstants.getServerUrl() + route, 
                    JSON.stringify(association),
                    { headers: this.appConstants.getHeaders() }
                ).map(res => res.json());
        } else {
            route = '/associations/update';  
            return this._http.put(
                    this.appConstants.getServerUrl() + route, 
                    JSON.stringify(association),
                    { headers: this.appConstants.getHeaders() }
                ).map(res => res.json());
        }
    }

    // Delete Association
    deleteAssociation(association: Association){
        var route = '/assotiations/';
        if (association._id){
            route = route + association._id;
            return this._http.delete(
                this.appConstants.getServerUrl() + route,
                { headers: this.appConstants.getHeaders() }
            ).map( res => res.json());
        } else {
            alert("Can't delete Association, inconsistent data.");
        }
    }

}
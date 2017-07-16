import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppConstants} from '../../app.constants';
import { SeasonType } from '../model/seasontype.model';

@Injectable()
export class SeasonTypeService{

    // Application Constants
    private appConstants;

    constructor( private _http: Http ){
        this.appConstants = new AppConstants();
     }

     // Return the list of SeasonTypes from the server
    getSeasonTypes(){
        var route = '/seasontype/seasontypes';
        return this._http.get(
                this.appConstants.getServerUrl() + route,
                { headers: this.appConstants.getHeaders() }).
            map( seasontypes => seasontypes.json());
    }

    // Return a SeasonType with a given id
    getSeasonType(id: String){
        var route = '/seasontype/seasontypeid/' + id;
        return this._http.get(
                this.appConstants.getServerUrl() + route,
                { headers: this.appConstants.getHeaders() }).
            map( seasontype => seasontype.json());        
    }

    // Update or create a SeasonType
    updateCreateSeasonType(seasontype: SeasonType){
        var route;
        if (!seasontype._id){
            route = '/seasontype/create';
            return this._http.post(
                    this.appConstants.getServerUrl() + route, 
                    JSON.stringify(seasontype),
                    { headers: this.appConstants.getHeaders() }
                ).map(res => res.json());
        } else {
            route = '/seasontype/update';  
            return this._http.put(
                    this.appConstants.getServerUrl() + route, 
                    JSON.stringify(seasontype),
                    { headers: this.appConstants.getHeaders() }
                ).map(res => res.json());
        }
    }

    // Delete SeasonType
    deleteSeasonType(seasontype: SeasonType){
        var route = '/seasontype/delete/';
        if (seasontype._id){
            route = route + seasontype._id;
            return this._http.delete(
                this.appConstants.getServerUrl() + route,
                { headers: this.appConstants.getHeaders() }
            ).map( res => res.json());
        } else {
            alert("Can't delete Season Type, inconsistent data.");
        }
    }

}
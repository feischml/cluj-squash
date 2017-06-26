import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppConstants} from '../../app.constants';
import { Club } from '../model/club.model';

@Injectable()
export class ClubsService{
    
    // Application Constants
    private appConstants;

    constructor( private _http: Http ){
        this.appConstants = new AppConstants();
    }

    // Return the list of Clubs from the server
    getClubs(){
        var route = '/clubs/clubs';
        return this._http.get(
                this.appConstants.getServerUrl() + route,
                { headers: this.appConstants.getHeaders() }).
            map( clubs => clubs.json());
    }

    // Return a club with a given name or id
    getClub(name?: String, id?: String){
        var route;
        if (name)
            route = '/clubs/clubname/' + name;
        if (id)
            route = '/clubs/clubid/' + id;
        return this._http.get(
                this.appConstants.getServerUrl() + route,
                { headers: this.appConstants.getHeaders() }).
            map( club => club.json());        
    }

    // Update or create a club
    updateCreateClub(club: Club){
        var route;
        if (!club._id){
            route = '/clubs/create';
            return this._http.post(
                    this.appConstants.getServerUrl() + route, 
                    JSON.stringify(club),
                    { headers: this.appConstants.getHeaders() }
                ).map(res => res.json());
        } else {
            route = '/clubs/update';  
            return this._http.put(
                    this.appConstants.getServerUrl() + route, 
                    JSON.stringify(club),
                    { headers: this.appConstants.getHeaders() }
                ).map(res => res.json());
        }
    }

}
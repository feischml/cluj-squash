import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppConstants} from '../../app.constants';
import { Club } from '../model/club.model';
import { Headers } from '@angular/http';

@Injectable()
export class ClubsService{
    
    constructor( private _http: Http ){ }

    // Return the list of Clubs from the server
    getClubs(){
        var route = '/clubs/clubs';
        return this._http.get(AppConstants.serverUrl + route).
            map( clubs => clubs.json());
    }

    // Return a club with a given name or id
    getClub(name?: String, id?: String){
        var route;
        if (name)
            route = '/clubs/clubname/' + name;
        if (id)
            route = '/clubs/clubid/' + id;
        return this._http.get(AppConstants.serverUrl + route).
            map( club => club.json());        
    }

    // Update or create a club
    updateCreateClub(club: Club){
        var route;
        if (!club._id){
            route = '/clubs/create';
            return this._http.post(AppConstants.serverUrl + route, JSON.stringify(club))
			.map(res => res.json());
        } else {
            route = '/clubs/update';  
            return this._http.put(
                    AppConstants.serverUrl + route, 
                    JSON.stringify(club),
                    { headers: new AppConstants().getHeaders() }
                ).map(res => res.json());
        }
    }

}
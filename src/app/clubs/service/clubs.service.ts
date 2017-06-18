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
        return this._http.get(new AppConstants().getServerUrl() + route).
            map( clubs => clubs.json());
    }

    // Return a club with a given name or id
    getClub(name?: String, id?: String){
        var route;
        if (name)
            route = '/clubs/clubname/' + name;
        if (id)
            route = '/clubs/clubid/' + id;
        return this._http.get(new AppConstants().getServerUrl() + route).
            map( club => club.json());        
    }

    // Update or create a club
    updateCreateClub(club: Club){
        var route;
        if (!club._id){
            route = '/clubs/create';

            console.log(new AppConstants().getServerUrl() + route + "   " + JSON.stringify(club));

            return this._http.post(
                    new AppConstants().getServerUrl() + route, 
                    JSON.stringify(club),
                    { headers: new AppConstants().getHeaders() },
                ).map(res => res.json());
        } else {
            route = '/clubs/update';  
            return this._http.put(
                    new AppConstants().getServerUrl() + route, 
                    JSON.stringify(club),
                    { headers: new AppConstants().getHeaders() }
                ).map(res => res.json());
        }
    }

}
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppConstants} from '../app.constants';

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
        var route = '';
        if (name)
            route = '/clubs/clubname/' + name;
        if (id)
            route = '/clubs/clubid/' + id;
        return this._http.get(AppConstants.serverUrl + route).
            map( club => club.json());        
    }

}
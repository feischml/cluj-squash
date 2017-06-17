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

}
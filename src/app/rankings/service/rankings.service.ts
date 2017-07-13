import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppConstants} from '../../app.constants';
import { Rankings } from '../model/rankings.model';

@Injectable()
export class RankingsService{

    // Application Constants
    private appConstants;

    constructor( private _http: Http ){
        this.appConstants = new AppConstants();
    }

    // Return a Ranking with a given id
    getRanking(id: String){
        var route = '/rankings/rankingid/' + id;
        return this._http.get(
                this.appConstants.getServerUrl() + route,
                { headers: this.appConstants.getHeaders() }).
            map( res => res.json());        
    }

    // Update or create a Ranking
    updateCreateRanking(ranking: Rankings){
        var route;
        if (!ranking._id){
            route = '/rankings/create';
            console.log('create');
            return this._http.post(
                    this.appConstants.getServerUrl() + route, 
                    JSON.stringify(ranking),
                    { headers: this.appConstants.getHeaders() }
                ).map(res => res.json());
        } else {
            route = '/rankings/update';  
            return this._http.put(
                    this.appConstants.getServerUrl() + route, 
                    JSON.stringify(ranking),
                    { headers: this.appConstants.getHeaders() }
                ).map(res => res.json());
        }
    }

}
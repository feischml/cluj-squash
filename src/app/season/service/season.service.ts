import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppConstants} from '../../app.constants';
import { Season } from '../model/season.model';

@Injectable()
export class SeasonService{

    // Application Constants
    private appConstants;

    constructor( private _http: Http ){
        this.appConstants = new AppConstants();
     }

     // Return the list of Seasons from the server
    getSeasons(){
        var route = '/season/seasons';
        return this._http.get(
                this.appConstants.getServerUrl() + route,
                { headers: this.appConstants.getHeaders() }).
            map( seasons => seasons.json());
    }

    // Return a Season with a given id
    getSeason(id: String){
        var route = '/season/seasonid/' + id;
        return this._http.get(
                this.appConstants.getServerUrl() + route,
                { headers: this.appConstants.getHeaders() }).
            map( season => season.json());        
    }

    // Update or create a Season
    updateCreateSeason(season: Season){
        var route;
        if (!season._id){
            route = '/season/create';
            return this._http.post(
                    this.appConstants.getServerUrl() + route, 
                    JSON.stringify(season),
                    { headers: this.appConstants.getHeaders() }
                ).map(res => res.json());
        } else {
            route = '/season/update';  
            return this._http.put(
                    this.appConstants.getServerUrl() + route, 
                    JSON.stringify(season),
                    { headers: this.appConstants.getHeaders() }
                ).map(res => res.json());
        }
    }

    // Delete Season
    deleteSeason(season: Season){
        var route = '/season/delete/';
        if (season._id){
            route = route + season._id;
            return this._http.delete(
                this.appConstants.getServerUrl() + route,
                { headers: this.appConstants.getHeaders() }
            ).map( res => res.json());
        } else {
            alert("Can't delete Season, inconsistent data.");
        }
    }

    // Update actualRankingId
    updateActualRanking(rankingId: string, seasonId: string){
        var route = '/season/updateRankingId';
        return this._http.put(
            this.appConstants.getServerUrl() + route,
            { 
              seasonId: seasonId,
              rankingId: rankingId
            },
            { headers: this.appConstants.getHeaders() }
        ).map( res => res.json());
    }

}
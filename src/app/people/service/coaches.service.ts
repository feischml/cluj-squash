import { Component, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppConstants} from '../../app.constants';
import { CoachUser } from '../model/coachuser.model'; 

@Injectable()
export class CoachesService{

    // Application Constants
    private appConstants;

    constructor(private _http: Http){ 
        this.appConstants = new AppConstants();
    }

    // Get all Coaches 
    getAllCoaches(){
        var route = '/coaches/coaches';
        return this._http.get(
            this.appConstants.getServerUrl() + route,
            { headers: this.appConstants.getHeaders() }
        ).map( coaches => coaches.json());
    }

    // Get Coach by ID
    getCoachById(id: String){
        var route = "/coaches/coachid/" + id;
        return this._http.get(
                this.appConstants.getServerUrl() + route,
                { headers: this.appConstants.getHeaders() }).
            map( coach => coach.json());  
    }

    // Update a Coach Account
    updateCoach(coachUser: CoachUser){
        var  route = '/coaches/update';  
        return this._http.put(
            this.appConstants.getServerUrl() + route, 
            JSON.stringify(coachUser.coach),
            { headers: this.appConstants.getHeaders() }
        ).map(res => res.json());
    }

}
import { Component, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppConstants} from '../../app.constants';
import { PlayerUser } from '../model/playeruser.model'; 

@Injectable()
export class PlayersService{

    // Application Constants
    private appConstants;

    constructor(private _http: Http){ 
        this.appConstants = new AppConstants();
    }

    // Get all Players
    getAllPlayers(){
        var route = '/players/players';
        return this._http.get(
            this.appConstants.getServerUrl() + route,
            { headers: this.appConstants.getHeaders() }
        ).map( players => players.json());
    }

    // Get Player by ID
    getPlayerById(id: String){
        var route = "/players/playerid/" + id;
        return this._http.get(
                this.appConstants.getServerUrl() + route,
                { headers: this.appConstants.getHeaders() }).
            map( player => player.json());  
    }

    // Update a Player Account
    updatePlayer(playerUser: PlayerUser){
        var  route = '/players/update';  
        return this._http.put(
            this.appConstants.getServerUrl() + route, 
            JSON.stringify(playerUser.player),
            { headers: this.appConstants.getHeaders() }
        ).map(res => res.json());
    }

}
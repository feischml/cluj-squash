import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppConstants} from '../../app.constants';
import { Events } from '../model/events.model';
import { User } from '../../people/model/users.model';

@Injectable()
export class EventsService{

    // Application Constants
    private appConstants;

    constructor( private _http: Http ){
        this.appConstants = new AppConstants();
    }

    // Return the list of Events from the server
    // Check also if current user is registered or not to an event
    getEvents(loggedUser: User){
        var route = '/events/events';
        return this._http.get(
                this.appConstants.getServerUrl() + route,
                { headers: this.appConstants.getHeaders() }).
            map( res => {
                let events: Events[] = JSON.parse(JSON.stringify(res.json()));
                events.forEach(element => {
                    element.userRegistered = 
                        (loggedUser && element.userIds.indexOf(loggedUser._id) >= 0) ? true : false;
                });
                return events;
            });
    }

    // Return an Event with a given id
    getEvent(id: String){
        var route = '/events/eventid/' + id;
        return this._http.get(
                this.appConstants.getServerUrl() + route,
                { headers: this.appConstants.getHeaders() }).
            map( res => res.json());        
    }

    // Update or create an Event
    updateCreateEvent(event: Events){
        var route;
        if (!event._id){
            route = '/events/create';
            return this._http.post(
                    this.appConstants.getServerUrl() + route, 
                    JSON.stringify(event),
                    { headers: this.appConstants.getHeaders() }
                ).map(res => res.json());
        } else {
            route = '/events/update';  
            return this._http.put(
                    this.appConstants.getServerUrl() + route, 
                    JSON.stringify(event),
                    { headers: this.appConstants.getHeaders() }
                ).map(res => res.json());
        }
    }

    // Delete Event
    deleteEvent(event: Events){
        var route = '/events/delete/';
        if (event._id){
            route = route + event._id;
            return this._http.delete(
                this.appConstants.getServerUrl() + route,
                { headers: this.appConstants.getHeaders() }
            ).map( res => res.json());
        } else {
            alert("Can't delete Event, inconsistent data.");
        }
    }

    // Register User for Event
    registerOrUnregisterUser(register: boolean, event: Events, user: User){
        if (register)
            var route = '/events/register';
        else
            var route = '/events/unregister';

        // Create Object to be sent to server
        var registerUser = {
            userId: user._id,
            eventId: event._id
        };

        return this._http.put(
            this.appConstants.getServerUrl() + route,
            registerUser,
            { headers: this.appConstants.getHeaders() }
        ).map( res => res.json());
    }

    // Update Ranking ID
    updateRankingId(rankId: String, eventId: String){
        var route = '/events/updateRankingId';

        // Create Object to be sent to server
        var updateRanking = {
            rankingId: rankId,
            eventId: eventId
        };

        return this._http.put(
            this.appConstants.getServerUrl() + route,
            updateRanking,
            { headers: this.appConstants.getHeaders() }
        ).map( res => res.json());
    }

}
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
    getEvents(){
        var route = '/events/events';
        return this._http.get(
                this.appConstants.getServerUrl() + route,
                { headers: this.appConstants.getHeaders() }).
            map( res => res.json());
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
    registerUser(event: Events, user: User){
        var route = '/events/register';
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

}
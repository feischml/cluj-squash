import { Component, OnInit } from '@angular/core';
import { EventsService } from './service/events.service';
import { User } from '../people/model/users.model';
import { LclStorageService } from '../lclstorage/lclstorage.service';
import { AppConstants } from '../app.constants';
import { Events } from './model/events.model';

@Component({
    templateUrl: 'events.template.html',
    styleUrls: ['styles/events.style.css'],
    providers: [ EventsService ]
})
export class EventsComponent implements OnInit{

    componentTitle = "Events";
    // Listr of events
    events = [];

    // Get logged in User
    loggedUser: User;
    private lclStorage: LclStorageService;

    constructor(private _eventsservice: EventsService){ 
        // Get logged user info
        this.lclStorage = new LclStorageService();
        this.loggedUser = JSON.parse(this.lclStorage.getItem(AppConstants.LOGGED_USER));

        this._eventsservice.getEvents().subscribe(
            events => { 
                this.events = events
            },
            error => {
                console.log(error);
            }
        )
    }

    ngOnInit(){
        // Todo when loggen in/out refresh Register button
    }

    // Register User for an event
    register(event: Events, loggedUser: User){
        console.log(JSON.stringify(event));
        console.log(JSON.stringify(loggedUser));

        this._eventsservice.registerUser(event, loggedUser).subscribe(
            events => { 
                this.events = events
            },
            error => {
                console.log(error);
            }
        )
    }

}
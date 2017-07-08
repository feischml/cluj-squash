import { Component, OnInit } from '@angular/core';
import { EventsService } from '../service/events.service';
import { Events } from '../model/events.model';
import { LclStorageService } from '../../lclstorage/lclstorage.service';
import { User } from '../../people/model/users.model';
import { AppConstants } from '../../app.constants';

@Component({
    templateUrl: 'eventsadmin.template.html',
    providers: [ EventsService ]
})
export class EventsAdminComponent implements OnInit{

    componentTitle = "Manage Events";

    // List of Events
    events = [];

    // Get logged in User
    loggedUser: User;
    private lclStorage: LclStorageService;

    constructor(private _eventsService: EventsService){ 
        // Get logged user info
        this.lclStorage = new LclStorageService();
        this.loggedUser = JSON.parse(this.lclStorage.getItem(AppConstants.LOGGED_USER));
    }

    ngOnInit(){
        // Load the Events list
        this._eventsService.getEvents(this.loggedUser).subscribe(
            events => {
                this.events = events
            },
            err => {
                console.log(err);
        });
    }

    deleteEvent(event: Events){
        this._eventsService.deleteEvent(event).subscribe(
            event => {
                let index = this.events.indexOf(event);
                this.events.splice(index, 1);
            },
            err => {
                console.log(err);
        });
    }

}
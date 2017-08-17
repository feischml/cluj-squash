import { Component, Inject } from '@angular/core';
import { EventsService } from './service/events.service';
import { User } from '../people/model/users.model';
import { LclStorageService } from '../lclstorage/lclstorage.service';
import { AppConstants } from '../app.constants';
import { Events } from './model/events.model';
import { MessageHandler } from "app/common/messagehandler/messagehandler";
import { ToasterToken } from "app/common/toaster/toaster.service";

@Component({
    templateUrl: 'events.template.html',
    styleUrls: ['styles/events.style.css'],
    providers: [ EventsService ]
})
export class EventsComponent extends MessageHandler{

    componentTitle = "New arrivals";
    // Listr of events
    events: Events [] = [];
    // Get logged in User
    loggedUser: User;
    private lclStorage: LclStorageService;

    constructor(@Inject( ToasterToken ) private _toasterToken: any,
                private _eventsservice: EventsService){ 
        
        // Call super MessageHandler constructor
        super(_toasterToken);
        
        // Get logged user info
        this.lclStorage = new LclStorageService();
        this.loggedUser = JSON.parse(this.lclStorage.getItem(AppConstants.LOGGED_USER));
        
        this._eventsservice.getEvents(this.loggedUser).subscribe(
            response => this.events = response,
            error => this.showError(error._body)
        )
    }

    // Register User for an event
    private register(event: Events, loggedUser: User){
        this._eventsservice.registerOrUnregisterUser(true, event, loggedUser).subscribe(
            uEvent => this.updateEvent(event, true),
            error => this.showError('Registration unsuccessful') 
        )
    }

    // Unregister User from an event
    private unregister(event: Events, loggedUser: User){
        this._eventsservice.registerOrUnregisterUser(false, event, loggedUser).subscribe(
            uEvent => this.updateEvent(event, false),
            error => this.showError('Unregistration unsuccessful')
        )
    }

    // Update event after registration/unregistration
    private updateEvent(event: Events, registered: Boolean){
        let index = this.events.indexOf(event);
        if (index >= 0)
            this.events[index].userRegistered = registered;
    }

}
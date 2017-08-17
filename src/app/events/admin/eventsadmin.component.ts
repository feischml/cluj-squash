import { Component, OnInit, Inject } from '@angular/core';
import { EventsService } from '../service/events.service';
import { Events } from '../model/events.model';
import { LclStorageService } from '../../lclstorage/lclstorage.service';
import { User } from '../../people/model/users.model';
import { AppConstants } from '../../app.constants';
import { MessageHandler } from "app/common/messagehandler/messagehandler";
import { ToasterToken } from "app/common/toaster/toaster.service";

@Component({
    templateUrl: 'eventsadmin.template.html',
    providers: [ EventsService ]
})
export class EventsAdminComponent extends MessageHandler implements OnInit{

    componentTitle = "Manage Events";
    // List of Events
    events = [];
    // Get logged in User
    loggedUser: User;
    private lclStorage: LclStorageService;

    constructor(@Inject( ToasterToken ) private _toasterToken: any,
                private _eventsService: EventsService){ 

        // Call super MessageHandler constructor
        super(_toasterToken);
        
        // Get logged user info
        this.lclStorage = new LclStorageService();
        this.loggedUser = JSON.parse(this.lclStorage.getItem(AppConstants.LOGGED_USER));
    }

    ngOnInit(){
        // Load the Events list
        this._eventsService.getEvents(this.loggedUser).subscribe(
            response => this.events = response,
            err => this.showError(err._body)
        );
    }

    private deleteEvent(event: Events){
        this._eventsService.deleteEvent(event).subscribe(
            event => {
                let index = this.events.indexOf(event);
                this.events.splice(index, 1);
            },
            err => this.showError(err._body)
        );
    }

}
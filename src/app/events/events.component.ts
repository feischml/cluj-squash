import { Component, OnInit } from '@angular/core';
import { EventsService } from './service/events.service';
import { Events } from './model/events.model';

@Component({
    templateUrl: 'events.template.html',
    providers: [ EventsService ]
})
export class EventsComponent implements OnInit{

    componentTitle = "Events";

    // List of Events
    events = [];

    constructor(private _eventsService: EventsService){ }

    ngOnInit(){
        // Load the Events list
        this._eventsService.getEvents().subscribe(
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
                this.events.splice(index,1);
            },
            err => {
                console.log(err);
        });
    }

}
import { Component } from '@angular/core';
import { EventsService } from './service/events.service';

@Component({
    templateUrl: 'events.template.html',
    styleUrls: ['styles/events.style.css'],
    providers: [ EventsService ]
})
export class EventsComponent{

    componentTitle = "Events";
    // Listr of events
    events = [];

    constructor(private _eventsservice: EventsService){ 
        this._eventsservice.getEvents().subscribe(
            events => { 
                this.events = events
            },
            error => {
                console.log(error);
            }
        )
    }

}
import { Component, OnInit } from '@angular/core';
import { Events } from '../model/events.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from '../service/events.service';

@Component({
    templateUrl: 'eventsformadmin.template.html',
    providers: [ EventsService ]
})
export class EventsFormAdminComponent implements OnInit{

    componentTitle = "Manage Event Details";

    // Event that will be created or updated
    event = new Events();

    form: FormGroup;

    constructor(private _eventsService: EventsService,
                private _route: ActivatedRoute,
                private _router: Router,
                fb: FormBuilder){

        // Build the form
        this.form = fb.group({
            name: [],
            description: [],
            webpage: [],
            eventdate: [],
            registeruntildate: [],
            locationdescription: [],
            locationwebpage: []
        });
    }

    ngOnInit(){
        // Get the params from the URL 
        this._route.params.subscribe(params => {
            var id = params["id"];
        if (id){
            // Get Event by id
            this._eventsService.getEvent(id.toString()).subscribe(
                event => { 
                    this.event = event;  
                }, 
                function(err){
                    console.log(err);
                })  
            }
        });
    }

    // Save changes made in the form
    save(){        
        var result = this._eventsService.updateCreateEvent(this.event);
        result.subscribe(res => {
            this._router.navigate(['eventsadmin']);
        },
        err => {
            console.log(err);
        });
    }

}
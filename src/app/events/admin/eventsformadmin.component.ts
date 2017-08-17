import { Component, OnInit, Inject } from '@angular/core';
import { Events } from '../model/events.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from '../service/events.service';
import { MessageHandler } from "app/common/messagehandler/messagehandler";
import { ToasterToken } from "app/common/toaster/toaster.service";

@Component({
    templateUrl: 'eventsformadmin.template.html',
    providers: [ EventsService ]
})
export class EventsFormAdminComponent extends MessageHandler implements OnInit{

    componentTitle = "Manage Event and News";
    // Event that will be created or updated
    event = new Events();
    form: FormGroup;

    constructor(@Inject( ToasterToken ) private _toasterToken: any,
                private _eventsService: EventsService,
                private _route: ActivatedRoute,
                private _router: Router,
                fb: FormBuilder){
        
        // Call super MessageHandler constructor
        super(_toasterToken);

        // Build the form
        this.form = fb.group({
            name: [],
            description: [],
            webpage: [],
            eventdate: [],
            registeruntildate: [],
            locationdescription: [],
            locationwebpage: [],
            isNews: [],
            participationAllowed: []
        });
    }

    ngOnInit(){
        // Get the params from the URL 
        this._route.params.subscribe(params => {
            let id = params["id"];
            if (id)
                // Get Event by id
                this._eventsService.getEvent(id.toString()).subscribe(
                    response => this.event = response, 
                    err => this.showError(err._body)  
                );
        });
    }

    // Save changes made in the form
    private save(){        
        this._eventsService.updateCreateEvent(this.event).subscribe(
            res => this._router.navigate(['eventsadmin']),
            err => this.showError(err._body)
        );
    }

}
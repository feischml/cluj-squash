import { Component, OnInit, Inject } from '@angular/core';
import { ClubsService } from '../service/clubs.service';
import { Router, ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Club } from '../model/club.model';
import { MessageHandler } from "app/common/messagehandler/messagehandler";
import { ToasterToken } from "app/common/toaster/toaster.service";

@Component({
    templateUrl: './clubsformadmin.template.html',
    providers: [ ClubsService ]
})
export class ClubsFormAdminComponent extends MessageHandler implements OnInit{ 

    componentTitle = "Manage Club Details";
    form: FormGroup;
    // The actual club edited in the form
    club = new Club();

    constructor( @Inject( ToasterToken ) private _toasterToken: any,
                fb: FormBuilder,
                private _clubsService: ClubsService,
                private _route: ActivatedRoute,
                private _router: Router){

        // Call super MessageHandler constructor
        super(_toasterToken);

        // Build the form
        this.form = fb.group({
            clubname: [],
            description: [],
            phone: [],
            webpage: []
        });
    }

    ngOnInit(){
        // Get the params from the URL 
        this._route.params.subscribe(params => {
            let id = params["id"];
            if (id)
                // Get Club by id
                this._clubsService.getClub("", id.toString()).subscribe(
                    response => this.club = response, 
                    err => this.showError(err._body)
                )  
        });
    }

    // Save changes made in the form
    private save(){        
        this._clubsService.updateCreateClub(this.club).subscribe(
            response => this._router.navigate(['clubsadmin']),
            err => this.showError(err._body)
        );
    }

}
import { Component, OnInit, Output, Inject } from '@angular/core';
import { SeasonType } from '../model/seasontype.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SeasonTypeService } from '../service/seasontype.service';
import { MessageHandler } from "app/common/messagehandler/messagehandler";
import { ToasterToken } from "app/common/toaster/toaster.service";

@Component({
    templateUrl: 'seasontypeformadmin.template.html',
    providers: [ SeasonTypeService ]
})
export class SeasonTypeFormAdminComponent extends MessageHandler implements OnInit{

    componentTitle = "Manage Season Type";
    // Season Type that will be created or updated
    seasontype = new SeasonType();
    form: FormGroup;

    constructor(@Inject( ToasterToken ) private _toasterToken: any,
                private _seasontypeService: SeasonTypeService,
                private _route: ActivatedRoute,
                private _router: Router,
                fb: FormBuilder){

        // Call super MessageHandler constructor
        super(_toasterToken);

        // Build the form
        this.form = fb.group({
            name: [],
            beginner: []
        });
    }

    ngOnInit(){
        // Get the params from the URL 
        this._route.params.subscribe(params => {
            let id = params["id"];
            if (id)
                // Get Season Type by id
                this._seasontypeService.getSeasonType(id.toString()).subscribe(
                    response => this.seasontype = response,
                    err => this.showError(err._body)
                )  
        });
    }

    // Save changes made in the form
    private save(){        
        this._seasontypeService.updateCreateSeasonType(this.seasontype).subscribe(
            response => this._router.navigate(['seasontypeadmin']),
            err => this.showError(err._body)
        );
    }

}
import { Component, OnInit, Inject } from '@angular/core';
import { Season } from '../model/season.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SeasonService } from '../service/season.service';
import { SeasonTypeService } from '../../seasontype/service/seasontype.service';
import { MessageHandler } from "app/common/messagehandler/messagehandler";
import { ToasterToken } from "app/common/toaster/toaster.service";

@Component({
    templateUrl: 'seasonformadmin.template.html',
    providers: [ SeasonService, SeasonTypeService ]
})
export class SeasonFormAdminComponent extends MessageHandler implements OnInit{

    componentTitle = "Manage Season";
    // Season that will be created or updated
    season = new Season();
    // Season types
    seasontypes = [];
    form: FormGroup;

    constructor(@Inject( ToasterToken ) private _toasterToken: any,
                private _seasonService: SeasonService,
                private _seasonTypeService: SeasonTypeService,
                private _route: ActivatedRoute,
                private _router: Router,
                fb: FormBuilder){

        // Call super MessageHandler constructor
        super(_toasterToken);
        
        // Build the form
        this.form = fb.group({
            name: [],
            description: [],
            beginDate: [],
            endDate: [],
            seasonTypeId: []
        });
    }

    ngOnInit(){
        // Get the params from the URL 
        this._route.params.subscribe(params => {
            let id = params["id"];
            if (id)
                // Get Season by id
                this._seasonService.getSeason(id.toString()).subscribe(
                    response => this.season = response, 
                    err => this.showError(err._body)
                )  
        });

        // Get the list of SeasonTypes
        this._seasonTypeService.getSeasonTypes().subscribe(
            response => this.seasontypes = response,
            err => this.showError(err._body)
        )
    }

    // Save changes made in the form
    private save(){        
        this._seasonService.updateCreateSeason(this.season).subscribe(
            res => this._router.navigate(['seasonadmin']),
            err => this.showError(err._body)
        );
    }

}
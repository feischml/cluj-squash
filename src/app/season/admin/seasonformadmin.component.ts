import { Component, OnInit } from '@angular/core';
import { Season } from '../model/season.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SeasonService } from '../service/season.service';
import { SeasonTypeService } from '../../seasontype/service/seasontype.service';

@Component({
    templateUrl: 'seasonformadmin.template.html',
    providers: [SeasonService, SeasonTypeService]
})
export class SeasonFormAdminComponent implements OnInit{

    componentTitle = "Manage Season";

    // Season that will be created or updated
    season = new Season();

    // Season types
    seasontypes = [];

    form: FormGroup;

    constructor(private _seasonService: SeasonService,
                private _seasonTypeService: SeasonTypeService,
                private _route: ActivatedRoute,
                private _router: Router,
                fb: FormBuilder){

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
            var id = params["id"];
        if (id){
            // Get Season by id
            this._seasonService.getSeason(id.toString()).subscribe(
                season => { 
                    this.season = season;  
                }, 
                function(err){
                    console.log(err);
                })  
            }
        });

        // Get the list of SeasonTypes
        this._seasonTypeService.getSeasonTypes().subscribe(
            seasonTypes => this.seasontypes = seasonTypes,
            err => console.log(err)
        )
    }

    // Save changes made in the form
    save(){        
        var result = this._seasonService.updateCreateSeason(this.season);
        result.subscribe(res => {
            this._router.navigate(['seasonadmin']);
        },
        err => {
            console.log(err);
        });
    }

}
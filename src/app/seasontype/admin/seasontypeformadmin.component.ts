import { Component, OnInit } from '@angular/core';
import { SeasonType } from '../model/seasontype.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SeasonTypeService } from '../service/seasontype.service';

@Component({
    templateUrl: 'seasontypeformadmin.template.html',
    providers: [SeasonTypeService]
})
export class SeasonTypeFormAdminComponent implements OnInit{

    componentTitle = "Manage Season Type";

    // Season Type that will be created or updated
    seasontype = new SeasonType();

    form: FormGroup;

    constructor(private _seasontypeService: SeasonTypeService,
                private _route: ActivatedRoute,
                private _router: Router,
                fb: FormBuilder){

        // Build the form
        this.form = fb.group({
            name: [],
            beginner: []
        });
    }

    ngOnInit(){
        // Get the params from the URL 
        this._route.params.subscribe(params => {
            var id = params["id"];
        if (id){
            // Get Season Type by id
            this._seasontypeService.getSeasonType(id.toString()).subscribe(
                seasontype => { 
                    this.seasontype = seasontype;  
                }, 
                function(err){
                    console.log(err);
                })  
            }
        });
    }

    // Save changes made in the form
    save(){        
        var result = this._seasontypeService.updateCreateSeasonType(this.seasontype);
        result.subscribe(res => {
            this._router.navigate(['seasontypeadmin']);
        },
        err => {
            console.log(err);
        });
    }

}
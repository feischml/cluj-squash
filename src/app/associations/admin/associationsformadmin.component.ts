import { Component, OnInit } from '@angular/core';
import { Association } from '../model/association.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AssociationService } from '../service/association.service';

@Component({
    templateUrl: 'associationsformadmin.template.html',
    providers: [AssociationService]
})
export class AssociationsFormAdminComponent implements OnInit{

    componentTitle = "Edit Association";

    // Association that will be created or updated
    association = new Association();

    form: FormGroup;

    constructor(private _associationsService: AssociationService,
                private _route: ActivatedRoute,
                private _router: Router,
                fb: FormBuilder){

        // Build the form
        this.form = fb.group({
            name: [],
            description: [],
            webpage: []
        });
    }

    ngOnInit(){
        // Get the params from the URL 
        this._route.params.subscribe(params => {
            var id = params["id"];
        if (id){
            // Get Association by id
            this._associationsService.getAssociation(id.toString()).subscribe(
                association => { 
                    this.association = association;  
                }, 
                function(err){
                    console.log(err);
                })  
            }
        });
    }

    // Save changes made in the form
    save(){        
        var result = this._associationsService.updateCreateAssociation(this.association);
        result.subscribe(res => {
            this._router.navigate(['associationsadmin']);
        },
        err => {
            console.log(err);
        });
    }

}
import { Component, OnInit } from '@angular/core';
import { Association } from '../model/association.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AssociationService } from '../service/association.service';
import { Observable } from "rxjs/Observable";

@Component({
    templateUrl: 'associationsformadmin.template.html',
    providers: [ AssociationService ]
})
export class AssociationsFormAdminComponent implements OnInit{

    componentTitle = "Manage Association Details";

    // Association that will be created or updated
    association = new Association();
    association$: Observable<Association>;

    form: FormGroup;

    constructor(private _associationsService: AssociationService,
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
        this.association$ = this._associationsService.selectedAssociation$;
        this.association$.subscribe( association => this.association = association);
    }

    // Save changes made in the form
    private save(){     
        this._associationsService.updateCreateAssociationDispatch(this.association);
        this._router.navigate(['associationsadmin']); 
    }

}
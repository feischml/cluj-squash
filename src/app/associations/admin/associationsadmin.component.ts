import { Component, OnInit } from '@angular/core';
import { AssociationService } from '../service/association.service';
import { Association } from '../model/association.model';
import { Observable } from "rxjs/Observable";
import { Router } from "@angular/router";

@Component({
    templateUrl: 'associationsadmin.template.html',
    providers: [ AssociationService ]
})
export class AssociationsAdminComponent implements OnInit{

    //Component Title
    componentTitle = "Manage Associations";

    //Associations Observable returned from the Store
    associations$: Observable<Association[]>;

    constructor( private _associationsService: AssociationService,
                 //Router defined for navigation between pages
                 private _router: Router ){ }

    ngOnInit(){
        this.associations$ = this._associationsService.associations$;
        this._associationsService.getAssociationsDispatch();       
    }

    //Delete Association from list
    private deleteAssociation(association: Association){
        this._associationsService.deleteAssociationDispatch(association);
    }

    //Select Association to be updated
    private selectAssociation(association: Association){
        this._associationsService.getAssociationDispatch(association);
        this._router.navigate(['/associationsadmin/associationid', association._id]);
    }

    //Create a new Association
    private createAssociation(){
        //Dispatch new instance of Association to strore
        this._associationsService.getAssociationDispatch(new Association());
        this._router.navigate(['/associationsadmin/create']);
    }

}
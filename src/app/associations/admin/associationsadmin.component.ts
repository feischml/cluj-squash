import { Component, OnInit } from '@angular/core';
import { AssociationService } from '../service/association.service';
import { Association } from '../model/association.model';
import { Observable } from "rxjs/Observable";

@Component({
    templateUrl: 'associationsadmin.template.html',
    providers: [AssociationService]
})
export class AssociationsAdminComponent implements OnInit{

    componentTitle = "Manage Associations";

    // List of Associations
    // associations = [];

    // constructor(private _associationsService: AssociationService){ }

    // ngOnInit(){

    //     // Load the Associations list
    //     this._associationsService.getAssociations().subscribe(
    //         associations => {
    //             this.associations = associations
    //         },
    //         err => console.log(err)
    //     );
    // }

    // Delete association from list
    // deleteAssociation(association: Association){
    //     this._associationsService.deleteAssociation(association).subscribe(
    //         associations => {
    //             let index = this.associations.indexOf(association);
    //             this.associations.splice(index,1);
    //         },
    //         err => console.log(err)
    //     );
    // }

    associations$: Observable<Association[]>;

    //associations$: Association[];

    constructor( private _associationsService: AssociationService ){ }

    ngOnInit(){
        this.associations$ = this._associationsService.associations$;
        this._associationsService.getAssociationsDispatch();
        //this.associations$.subscribe(res => console.log(res));
    }

}
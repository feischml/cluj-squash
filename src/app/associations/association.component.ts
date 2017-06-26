import { Component, OnInit } from '@angular/core';
import { AssociationService } from './service/association.service';
import { Association } from './model/association.model';

@Component({
    templateUrl: 'association.template.html',
    providers: [AssociationService]
})
export class AssociationComponent implements OnInit{

    componentTitle = "Associations";

    // List of Associations
    associations = [];

    constructor(private _associationsService: AssociationService){ }

    ngOnInit(){
        // Load the Associations list
        this._associationsService.getAssociations().subscribe(
            associations => {
                this.associations = associations
            },
            err => {
                console.log(err);
        });
    }

    deleteAssociation(association: Association){
        this._associationsService.deleteAssociation(association).subscribe(
            associations => {
                let index = this.associations.indexOf(association);
                this.associations.splice(index,1);
            },
            err => {
                console.log(err);
        });
    }

}
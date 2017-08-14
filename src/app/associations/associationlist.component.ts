import { Component, Input } from '@angular/core';
import { Association } from './model/association.model';
import { AssociationService } from "app/associations/service/association.service";

@Component({
  selector: 'association-list',
  templateUrl: 'associationlist.template.html',
  providers: [AssociationService]
})
export class AssociationlistComponent{

    @Input() associations: Association[];

    constructor( private _associationsService: AssociationService ) { }

    //Delete association from list
    deleteAssociation(association: Association){
      this._associationsService.deleteAssociationDispatch(association);
    }

}
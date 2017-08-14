import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Association } from './model/association.model';
import { AssociationService } from "app/associations/service/association.service";

@Component({
  selector: 'association-list',
  templateUrl: 'associationlist.template.html'
})
export class AssociationlistComponent{

    @Input() associations: Association[];
    @Output() deletedAssociation = new EventEmitter<Association>();

    constructor( ) { }

    deleteAssociation(association){
      this.deletedAssociation.emit(association);
    }
}
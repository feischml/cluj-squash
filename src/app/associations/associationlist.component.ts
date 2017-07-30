import { Component, Input } from '@angular/core';
import { Association } from './model/association.model';

@Component({
  selector: 'association-list',
  templateUrl: 'associationlist.template.html'
})
export class AssociationlistComponent{

    @Input() associations: Association[];

    constructor() { }

}
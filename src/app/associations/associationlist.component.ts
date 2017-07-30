import { Component, Input, OnChanges } from '@angular/core';
import { Association } from './model/association.model';

@Component({
  selector: 'association-list',
  templateUrl: 'associationlist.template.html'
})
export class AssociationlistComponent implements OnChanges{

    @Input() associations: Association[];

    constructor() { }

    ngOnChanges(){
      console.log(this.associations);
    }
}
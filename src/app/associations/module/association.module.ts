import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
// Components
import { AssociationComponent } from '../association.component';
import { AssociationFormComponent} from '../associationform.component';

@NgModule({
    imports: [
        RouterModule,
        FormsModule,
        CommonModule,
        HttpModule,
        ReactiveFormsModule 
    ],
    declarations: [
        AssociationComponent,
        AssociationFormComponent,
    ],
    exports: [
        AssociationComponent,
        AssociationFormComponent
    ]
})
export class AssociationModules{ }
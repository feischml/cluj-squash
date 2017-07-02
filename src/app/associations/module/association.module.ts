import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
// Components
import { AssociationsAdminComponent } from '../admin/associationsadmin.component';
import { AssociationsFormAdminComponent} from '../admin/associationsformadmin.component';

@NgModule({
    imports: [
        RouterModule,
        FormsModule,
        CommonModule,
        HttpModule,
        ReactiveFormsModule 
    ],
    declarations: [
        AssociationsAdminComponent,
        AssociationsFormAdminComponent,
    ],
    exports: [
        AssociationsAdminComponent,
        AssociationsFormAdminComponent
    ]
})
export class AssociationModules{ }
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
// Components Admin
import { AssociationsAdminComponent } from '../admin/associationsadmin.component';
import { AssociationsFormAdminComponent } from '../admin/associationsformadmin.component';
// Components Non-Admin
import { AssociationsComponent } from '../associations.component';

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
        AssociationsComponent
    ],
    exports: [
        AssociationsAdminComponent,
        AssociationsFormAdminComponent,
        AssociationsComponent
    ]
})
export class AssociationModules{ }
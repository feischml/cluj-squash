import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
// Components
import { RolesAdminComponent } from '../rolesadmin.component';
import { RolesFormAdminComponent } from '../rolesformadmin.component';

@NgModule({
    imports: [
        RouterModule,
        FormsModule,
        CommonModule,
        HttpModule,
        ReactiveFormsModule
    ],
    declarations: [
        RolesAdminComponent,
        RolesFormAdminComponent
    ],
    exports: [
        RolesAdminComponent,
        RolesFormAdminComponent
    ]
})
export class RolesModules{ }
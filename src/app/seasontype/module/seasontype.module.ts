import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
// Components Admin
import { SeasonTypeAdminComponent } from '../admin/seasontypeadmin.component';
import { SeasonTypeFormAdminComponent } from '../admin/seasontypeformadmin.component';

@NgModule({
    imports: [
        RouterModule,
        FormsModule,
        CommonModule,
        HttpModule,
        ReactiveFormsModule 
    ],
    declarations: [
        SeasonTypeAdminComponent,
        SeasonTypeFormAdminComponent
    ],
    exports: [
        SeasonTypeAdminComponent,
        SeasonTypeFormAdminComponent
    ]
})
export class SeasonTypeModules{ }
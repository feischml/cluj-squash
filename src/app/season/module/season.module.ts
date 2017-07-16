import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
// Components Admin
import { SeasonAdminComponent } from '../admin/seasonadmin.component';
import { SeasonFormAdminComponent } from '../admin/seasonformadmin.component';

@NgModule({
    imports: [
        RouterModule,
        FormsModule,
        CommonModule,
        HttpModule,
        ReactiveFormsModule 
    ],
    declarations: [
        SeasonAdminComponent,
        SeasonFormAdminComponent
    ],
    exports: [
        SeasonAdminComponent,
        SeasonFormAdminComponent
    ]
})
export class SeasonModules{ }
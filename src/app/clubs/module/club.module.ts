import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
// Components Admin
import { ClubsAdminComponent } from '../admin/clubsadmin.component';
import { ClubsFormAdminComponent } from '../admin/clubsformadmin.component';
// Component Non-Admin
import { ClubsComponent } from '../clubs.component';

@NgModule({
    imports: [
        RouterModule,
        FormsModule,
        CommonModule,
        HttpModule,
        ReactiveFormsModule 
    ],
    declarations: [
        ClubsAdminComponent,
        ClubsFormAdminComponent,
        ClubsComponent
    ],
    exports: [
        ClubsAdminComponent,
        ClubsFormAdminComponent,
        ClubsComponent
    ]
})
export class ClubModules{ }
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
// Components
import { ClubsAdminComponent } from '../admin/clubsadmin.component';
import { ClubsFormAdminComponent} from '../admin/clubsformadmin.component';

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
    ],
    exports: [
        ClubsAdminComponent,
        ClubsFormAdminComponent
    ]
})
export class ClubModules{ }
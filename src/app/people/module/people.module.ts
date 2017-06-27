import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
// Components
import { MyAccountComponent } from '../myaccount.component';
import { CoachesComponent } from '../coaches.component';
import { CoachesDetailComponent } from '../coachesdetail.component';
import { PlayersComponent } from '../players.component';
import { PlayersDetailComponent } from '../playersdetail.component';
import { AccountsAdminComponent } from '../accountsadmin.component';
import { AccountFormComponent } from '../accountform.component';

@NgModule({
    imports: [
        RouterModule,
        FormsModule,
        CommonModule,
        HttpModule,
        ReactiveFormsModule 
    ],
    declarations: [
        MyAccountComponent,
        CoachesComponent,
        CoachesDetailComponent,
        PlayersComponent,
        PlayersDetailComponent,
        AccountsAdminComponent,
        AccountFormComponent
    ],
    exports: [
        MyAccountComponent,
        CoachesComponent,
        CoachesDetailComponent,
        PlayersComponent,
        PlayersDetailComponent,
        AccountsAdminComponent,
        AccountFormComponent
    ]
})
export class PeopleModules{ }
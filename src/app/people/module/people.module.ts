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
import { UsersAdminComponent } from '../usersadmin.component';
import { UsersFormAdminComponent } from '../usersformadmin.component';

// Admin component
import { CoachesAdminComponent } from '../coachesadmin.component';
import { CoachesDetailAdminComponent } from '../coachesdetailadmin.component';
import { PlayersAdminComponent } from '../playersadmin.component';
import { PlayersDetailAdminComponent } from '../playersdetailadmin.component';

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
        UsersAdminComponent,
        UsersFormAdminComponent,
        CoachesAdminComponent,
        CoachesDetailAdminComponent,
        PlayersAdminComponent,
        PlayersDetailAdminComponent,
    ],
    exports: [
        MyAccountComponent,
        CoachesComponent,
        CoachesDetailComponent,
        PlayersComponent,
        PlayersDetailComponent,
        UsersAdminComponent,
        UsersFormAdminComponent,
        CoachesAdminComponent,
        CoachesDetailAdminComponent,
        PlayersAdminComponent,
        PlayersDetailAdminComponent,
    ]
})

// Export Module
export class PeopleModules{ }
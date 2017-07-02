import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
// Components
import { MyAccountComponent } from '../myaccount.component';
import { CoachesComponent } from '../coaches/coaches.component';
import { CoachesDetailComponent } from '../coaches/coachesdetail.component';
import { PlayersComponent } from '../players/players.component';
import { PlayersDetailComponent } from '../players/playersdetail.component';
import { UsersAdminComponent } from '../usersadmin.component';
import { UsersFormAdminComponent } from '../usersformadmin.component';

// Admin component
import { CoachesAdminComponent } from '../coaches/admin/coachesadmin.component';
import { CoachesDetailAdminComponent } from '../coaches/admin/coachesdetailadmin.component'
import { PlayersAdminComponent } from '../players/admin/playersadmin.component';
import { PlayersDetailAdminComponent } from '../players/admin/playersdetailadmin.component';

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
import { Router, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClubsComponent } from './clubs/clubs.component';
import { ClubsFormComponent } from './clubs/clubsform.component';
import { EventsComponent } from './events/events.component';
import { MyAccountComponent } from './people/myaccount.component';
import { AccountsAdminComponent } from './people/accountsadmin.component';
import { AccountFormComponent } from './people/accountform.component';
import { RolesAdminComponent } from './roles/rolesadmin.component';
import { RolesFormAdminComponent } from './roles/rolesformadmin.component';
import { CoachesComponent } from './people/coaches.component';
import { CoachesDetailComponent } from './people/coachesdetail.component';
import { PlayersComponent } from './people/players.component';
import { PlayersDetailComponent } from './people/playersdetail.component';
import { ProsquashComponent } from './prosquash/prosquash.component';

export const routing = RouterModule.forRoot([
    { path: 'home', component: HomeComponent },
    { path: 'clubs', component: ClubsComponent },
    { path: 'clubs/create', component: ClubsFormComponent },
    { path: 'clubs/clubname/:name', component: ClubsFormComponent },
    { path: 'clubs/clubid/:id', component: ClubsFormComponent },
    { path: 'events', component: EventsComponent },
    { path: 'coaches', component: CoachesComponent },
    { path: 'coaches/coachid/:id', component: CoachesDetailComponent },
    { path: 'players', component: PlayersComponent },
    { path: 'players/playerid/:id', component: PlayersDetailComponent },
    { path: 'myaccount', component: MyAccountComponent },
    { path: 'accounts', component: AccountsAdminComponent},
    { path: 'accounts/userid/:id', component: AccountFormComponent},
    { path: 'roles', component: RolesAdminComponent},
    { path: 'roles/roleid/:id', component: RolesFormAdminComponent},
    { path: 'roles/create', component: RolesFormAdminComponent},
    { path: 'prosquash', component: ProsquashComponent },
    { path: '**', component: HomeComponent }
]);
import { Router, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClubsAdminComponent } from './clubs/clubsadmin.component';
import { ClubsFormAdminComponent } from './clubs/clubsformadmin.component';
import { EventsAdminComponent } from './events/eventsadmin.component';
import { EventsFormAdminComponent } from './events/eventsformadmin.component';
import { MyAccountComponent } from './people/myaccount.component';
import { UsersAdminComponent } from './people/usersadmin.component';
import { UsersFormAdminComponent } from './people/usersformadmin.component';
import { RolesAdminComponent } from './roles/rolesadmin.component';
import { RolesFormAdminComponent } from './roles/rolesformadmin.component';
import { CoachesComponent } from './people/coaches.component';
import { CoachesDetailComponent } from './people/coachesdetail.component';
import { PlayersComponent } from './people/players.component';
import { PlayersDetailComponent } from './people/playersdetail.component';
import { CoachesAdminComponent } from './people/coachesadmin.component';
import { CoachesDetailAdminComponent } from './people/coachesdetailadmin.component';
import { PlayersAdminComponent } from './people/playersadmin.component';
import { PlayersDetailAdminComponent } from './people/playersdetailadmin.component';
import { ProsquashComponent } from './prosquash/prosquash.component';
import { AssociationsAdminComponent } from './associations/associationsadmin.component';
import { AssociationsFormAdminComponent } from './associations/associationsformadmin.component';

export const routing = RouterModule.forRoot([
    { path: 'home', component: HomeComponent },
    { path: 'clubsadmin', component: ClubsAdminComponent },
    { path: 'clubsadmin/create', component: ClubsFormAdminComponent },
    { path: 'clubsadmin/clubid/:id', component: ClubsFormAdminComponent },
    { path: 'coaches', component: CoachesComponent },
    { path: 'coaches/coachid/:id', component: CoachesDetailComponent },
    { path: 'players', component: PlayersComponent },
    { path: 'players/playerid/:id', component: PlayersDetailComponent },
    { path: 'coachesadmin', component: CoachesAdminComponent },
    { path: 'coachesadmin/coachid/:id', component: CoachesDetailAdminComponent },
    { path: 'playersadmin', component: PlayersAdminComponent },
    { path: 'playersadmin/playerid/:id', component: PlayersDetailAdminComponent },
    { path: 'myaccount', component: MyAccountComponent },
    { path: 'usersadmin', component: UsersAdminComponent},
    { path: 'usersadmin/userid/:id', component: UsersFormAdminComponent},
    { path: 'rolesadmin', component: RolesAdminComponent},
    { path: 'rolesadmin/roleid/:id', component: RolesFormAdminComponent},
    { path: 'rolesadmin/create', component: RolesFormAdminComponent},
    { path: 'prosquash', component: ProsquashComponent },
    { path: 'associationsadmin', component: AssociationsAdminComponent},
    { path: 'associationsadmin/associationid/:id', component: AssociationsFormAdminComponent},
    { path: 'associationsadmin/create', component: AssociationsFormAdminComponent},
    { path: 'eventsadmin', component: EventsAdminComponent },
    { path: 'eventsadmin/eventid/:id', component: EventsFormAdminComponent },
    { path: 'eventsadmin/create', component: EventsFormAdminComponent },
    { path: '**', component: HomeComponent }
]);
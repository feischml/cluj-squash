import { Router, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

// Clubs
import { ClubsAdminComponent } from './clubs/admin/clubsadmin.component';
import { ClubsFormAdminComponent } from './clubs/admin/clubsformadmin.component';
import { ClubsComponent } from './clubs/clubs.component';

// Events
import { EventsAdminComponent } from './events/admin/eventsadmin.component';
import { EventsFormAdminComponent } from './events/admin/eventsformadmin.component';
import { EventsComponent } from './events/events.component';

// My account - User
import { MyAccountComponent } from './people/myaccount.component';
import { UsersAdminComponent } from './people/usersadmin.component';
import { UsersFormAdminComponent } from './people/usersformadmin.component';

// Roles
import { RolesAdminComponent } from './roles/rolesadmin.component';
import { RolesFormAdminComponent } from './roles/rolesformadmin.component';

// Coaches
import { CoachesComponent } from './people/coaches/coaches.component';
import { CoachesDetailComponent } from './people/coaches/coachesdetail.component';
import { CoachesAdminComponent } from './people/coaches/admin/coachesadmin.component';
import { CoachesDetailAdminComponent } from './people/coaches/admin/coachesdetailadmin.component';

// Players
import { PlayersComponent } from './people/players/players.component';
import { PlayersDetailComponent } from './people/players/playersdetail.component';
import { PlayersAdminComponent } from './people/players/admin/playersadmin.component';
import { PlayersDetailAdminComponent } from './people/players/admin/playersdetailadmin.component';

// Prosquash
import { ProsquashComponent } from './prosquash/prosquash.component';

// Associations
import { AssociationsAdminComponent } from './associations/admin/associationsadmin.component';
import { AssociationsFormAdminComponent } from './associations/admin/associationsformadmin.component';
import { AssociationsComponent } from './associations/associations.component';

export const routing = RouterModule.forRoot([
    { path: 'home', component: HomeComponent },
    // Clubs
    { path: 'clubsadmin', component: ClubsAdminComponent },
    { path: 'clubsadmin/create', component: ClubsFormAdminComponent },
    { path: 'clubsadmin/clubid/:id', component: ClubsFormAdminComponent },
    { path: 'clubs', component: ClubsComponent },
    // Coaches
    { path: 'coaches', component: CoachesComponent },
    { path: 'coaches/coachid/:id', component: CoachesDetailComponent },
    { path: 'coachesadmin', component: CoachesAdminComponent },
    { path: 'coachesadmin/coachid/:id', component: CoachesDetailAdminComponent },
    // Players
    { path: 'players', component: PlayersComponent },
    { path: 'players/playerid/:id', component: PlayersDetailComponent },
    { path: 'playersadmin', component: PlayersAdminComponent },
    { path: 'playersadmin/playerid/:id', component: PlayersDetailAdminComponent },
    // My account
    { path: 'myaccount', component: MyAccountComponent },
    // Users
    { path: 'usersadmin', component: UsersAdminComponent},
    { path: 'usersadmin/userid/:id', component: UsersFormAdminComponent},
    // Roles
    { path: 'rolesadmin', component: RolesAdminComponent},
    { path: 'rolesadmin/roleid/:id', component: RolesFormAdminComponent},
    { path: 'rolesadmin/create', component: RolesFormAdminComponent},
    // Prosquash
    { path: 'prosquash', component: ProsquashComponent },
    // Associations
    { path: 'associationsadmin', component: AssociationsAdminComponent},
    { path: 'associationsadmin/associationid/:id', component: AssociationsFormAdminComponent},
    { path: 'associationsadmin/create', component: AssociationsFormAdminComponent},
    { path: 'associations', component: AssociationsComponent},
    // Events
    { path: 'eventsadmin', component: EventsAdminComponent },
    { path: 'eventsadmin/eventid/:id', component: EventsFormAdminComponent },
    { path: 'eventsadmin/create', component: EventsFormAdminComponent },
    { path: 'events', component: EventsComponent },
    // Others
    { path: '**', component: HomeComponent }
]);
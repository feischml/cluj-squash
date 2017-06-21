import { Router, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClubsComponent } from './clubs/clubs.component';
import { ClubsFormComponent } from './clubs/clubsform.component';
import { EventsComponent } from './events/events.component';
import { MyAccountComponent } from './people/myaccount.component';
import { CoachesComponent } from './people/coaches.component';
import { PlayersComponent } from './people/players.component';
import { ProsquashComponent } from './prosquash/prosquash.component';

export const routing = RouterModule.forRoot([
    { path: 'home', component: HomeComponent },
    { path: 'clubs', component: ClubsComponent },
    { path: 'clubs/create', component: ClubsFormComponent },
    { path: 'clubs/clubname/:name', component: ClubsFormComponent },
    { path: 'clubs/clubid/:id', component: ClubsFormComponent },
    { path: 'events', component: EventsComponent },
    { path: 'coaches', component: CoachesComponent },
    { path: 'players', component: PlayersComponent },
    { path: 'myaccount', component: MyAccountComponent },
    { path: 'prosquash', component: ProsquashComponent },
    { path: '**', component: HomeComponent }
]);
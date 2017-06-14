import { Router, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClubsComponent } from './clubs/clubs.component';
import { EventsComponent } from './events/events.component';
import { PeopleComponent } from './people/people.component';
import { ProsquashComponent } from './prosquash/prosquash.component';

export const routing = RouterModule.forRoot([
    { path: 'home', component: HomeComponent },
    { path: 'clubs', component: ClubsComponent },
    { path: 'events', component: EventsComponent },
    { path: 'people', component: PeopleComponent },
    { path: 'prosquash', component: ProsquashComponent },
    { path: '**', component: HomeComponent }
]);
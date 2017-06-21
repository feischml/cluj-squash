import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// import Appcomponent
import { AppComponent } from './app.component';

// main pages
import { HomeComponent } from './home/home.component';
import { ClubsComponent } from './clubs/clubs.component';
import { ClubsFormComponent } from  './clubs/clubsform.component';
import { EventsComponent } from './events/events.component';
import { MyAccountComponent } from './people/myaccount.component';
import { CoachesComponent } from './people/coaches.component';
import { PlayersComponent } from './people/players.component';
import { ProsquashComponent } from './prosquash/prosquash.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

// import routing
import { routing } from './app.routing';

// import modules
import { NavbarModules } from './navbar/navbar.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventsComponent,
    MyAccountComponent,
    CoachesComponent,
    PlayersComponent,
    ProsquashComponent,
    ClubsComponent,
    ClubsFormComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    NavbarModules,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

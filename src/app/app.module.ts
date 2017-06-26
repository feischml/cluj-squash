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
import { CoachesDetailComponent } from './people/coachesdetail.component';
import { PlayersComponent } from './people/players.component';
import { PlayersDetailComponent } from './people/playersdetail.component';
import { AccountsAdminComponent } from './people/accountsadmin.component';
import { RolesAdminComponent} from './roles/rolesadmin.component';
import { RolesFormAdminComponent } from './roles/rolesformadmin.component';
import { AccountFormComponent } from './people/accountform.component';
import { ProsquashComponent } from './prosquash/prosquash.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AssociationComponent } from './associations/association.component';
import { AssociationFormComponent } from './associations/associationform.component';

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
    AccountsAdminComponent,
    RolesAdminComponent,
    RolesFormAdminComponent,
    AccountFormComponent,
    CoachesComponent,
    CoachesDetailComponent,
    PlayersComponent,
    PlayersDetailComponent,
    ProsquashComponent,
    ClubsComponent,
    ClubsFormComponent,
    FooterComponent,
    NavbarComponent,
    AssociationComponent,
    AssociationFormComponent
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

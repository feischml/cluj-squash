import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// import Appcomponent
import { AppComponent } from './app.component';

// main pages
import { NavbarComponent } from './navbar/navbar.component';

// import routing
import { routing } from './app.routing';

// import modules
import { NavbarModules } from './navbar/module/navbar.module';
import { AssociationModules } from './associations/module/association.module';
import { ClubModules } from './clubs/module/club.module';
import { EventModules } from './events/module/events.module';
import { HomeModules } from './home/module/home.module';
import { FooterModules } from './footer/module/footer.module';
import { PeopleModules } from './people/module/people.module';
import { RolesModules } from './roles/module/roles.module';
import { ProsquashModules } from './prosquash/module/prosquash.module';
import { RankingsModules } from './rankings/module/rankings.module';
import { SeasonTypeModules } from './seasontype/module/seasontype.module';
import { SeasonModules } from './season/module/season.module';
import { NotfoundpageModule } from "app/notfoundpage/module/notfoundpage.module";

import { StoreModule } from '@ngrx/store';
import { assotiationsReducer } from './ngrx/reducer/associations.reducer';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    NotfoundpageModule,
    SeasonTypeModules,
    SeasonModules,
    AssociationModules,
    RolesModules,
    RankingsModules,
    PeopleModules,
    ProsquashModules,
    HomeModules,
    FooterModules,
    EventModules,
    ClubModules,
    NavbarModules,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    StoreModule.forRoot({ associations: assotiationsReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

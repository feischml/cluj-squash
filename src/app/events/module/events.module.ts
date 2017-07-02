import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
// Components Admin
import { EventsAdminComponent } from '../admin/eventsadmin.component';
import { EventsFormAdminComponent } from '../admin/eventsformadmin.component';
// Non Admin
import { EventsComponent} from '../events.component';

@NgModule({
    imports: [
        RouterModule,
        FormsModule,
        CommonModule,
        HttpModule,
        ReactiveFormsModule 
    ],
    declarations: [
        EventsAdminComponent,
        EventsFormAdminComponent,
        EventsComponent        
    ],
    exports: [
        EventsAdminComponent,
        EventsFormAdminComponent,
        EventsComponent
    ]
})
export class EventModules{ }
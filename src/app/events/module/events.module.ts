import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
// Components
import { EventsAdminComponent } from '../admin/eventsadmin.component';
import { EventsFormAdminComponent } from '../admin/eventsformadmin.component';

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
        EventsFormAdminComponent        
    ],
    exports: [
        EventsAdminComponent,
        EventsFormAdminComponent 
    ]
})
export class EventModules{ }
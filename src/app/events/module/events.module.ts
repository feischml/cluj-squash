import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
// Components
import { EventsComponent } from '../events.component';
import { EventsFormComponent } from '../eventsform.component';

@NgModule({
    imports: [
        RouterModule,
        FormsModule,
        CommonModule,
        HttpModule,
        ReactiveFormsModule 
    ],
    declarations: [
        EventsComponent,
        EventsFormComponent        
    ],
    exports: [
        EventsComponent
    ]
})
export class EventModules{ }
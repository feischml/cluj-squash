import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
// Components
import { ClubsComponent } from '../clubs.component';
import { ClubsFormComponent} from '../clubsform.component';

@NgModule({
    imports: [
        RouterModule,
        FormsModule,
        CommonModule,
        HttpModule,
        ReactiveFormsModule 
    ],
    declarations: [
        ClubsComponent,
        ClubsFormComponent,
    ],
    exports: [
        ClubsComponent,
        ClubsFormComponent
    ]
})
export class ClubModules{ }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
// Non Admin
import { NotfoundpageComponent } from '../notfoundpage.component';

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        HttpModule,
    ],
    declarations: [
        NotfoundpageComponent        
    ],
    exports: [
        NotfoundpageComponent
    ]
})
export class NotfoundpageModule{ }
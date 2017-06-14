import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { LoginmodalComponent } from './loginmodal.component';
import { SignupmodalComponent } from './signupmodal.component';


@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        HttpModule,
        ReactiveFormsModule 
    ],
    declarations: [
        LoginmodalComponent,
        SignupmodalComponent,
    ],
    exports: [
        LoginmodalComponent,
        SignupmodalComponent
    ]

})
export class NavbarModules{ }
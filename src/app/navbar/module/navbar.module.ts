import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
// Components
import { LoginmodalComponent } from '../loginmodal.component';
import { SignupmodalComponent } from '../signupmodal.component';
// Provider
import { LclStorageService } from '../../lclstorage/lclstorage.service';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        HttpModule,
        ReactiveFormsModule 
    ],
    declarations: [
        LoginmodalComponent,
        SignupmodalComponent
    ],
    exports: [
        LoginmodalComponent,
        SignupmodalComponent
    ], 
    providers: [LclStorageService]
})
export class NavbarModules{ }
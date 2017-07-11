import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
// Components Admin
import { RankingsFormAdminComponent } from '../admin/rankingsformadmin.component';
// Reusable Component
import { RankingDetailsComponent } from '../details/rankingdetails.component';

@NgModule({
    imports: [
        RouterModule,
        FormsModule,
        CommonModule,
        HttpModule,
        ReactiveFormsModule 
    ],
    declarations: [
        RankingsFormAdminComponent,
        RankingDetailsComponent      
    ],
    exports: [
        RankingsFormAdminComponent,
        RankingDetailsComponent
    ]
})

export class RankingsModules{ }
import { Component, Input, Inject } from '@angular/core';
import { RankingsDetail } from '../model/rankingsdetail.model';
import { FormGroup, FormArray } from '@angular/forms';
import { MessageHandler } from "app/common/messagehandler/messagehandler";
import { ToasterToken } from "app/common/toaster/toaster.service";

@Component({
    selector: 'rankingDetail',
    templateUrl: 'rankingdetails.template.html'
})
export class RankingDetailsComponent extends MessageHandler{

    @Input() detail: RankingsDetail;

    constructor(@Inject( ToasterToken ) private _toasterToken: any){
        
        // Call super MessageHandler constructor
        super(_toasterToken);
    }

}
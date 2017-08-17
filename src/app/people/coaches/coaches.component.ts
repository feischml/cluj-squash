import { Component, OnInit, Inject } from '@angular/core';
import { CoachesService } from '../service/coaches.service';
import { MessageHandler } from "app/common/messagehandler/messagehandler";
import { ToasterToken } from "app/common/toaster/toaster.service";

@Component({
    templateUrl: './coaches.template.html',
    providers: [ CoachesService ]
})
export class CoachesComponent extends MessageHandler implements OnInit{

    componentTitle = "Coaches";
    coaches = [];

    constructor(@Inject( ToasterToken ) private _toasterToken: any,
                private _coachesService: CoachesService){
        
        // Call super MessageHandler constructor
        super(_toasterToken);
    }

    ngOnInit(){
        this._coachesService.getAllCoaches().subscribe(
            response => this.coaches = response,
            err => this.showError(err._body)
        );
    }

}
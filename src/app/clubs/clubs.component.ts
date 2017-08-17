import { Component, Inject } from '@angular/core';
import { MessageHandler } from "app/common/messagehandler/messagehandler";
import { ToasterToken } from "app/common/toaster/toaster.service";

@Component({
    templateUrl: 'clubs.template.html'
})
export class ClubsComponent extends MessageHandler{

    componentTitle = "Clubs";

    constructor(@Inject( ToasterToken ) private _toasterToken: any){
        
        // Call super MessageHandler constructor
        super(_toasterToken);
    }

}
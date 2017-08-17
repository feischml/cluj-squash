import { Component, Inject } from '@angular/core';
import { MessageHandler } from "app/common/messagehandler/messagehandler";
import { ToasterToken } from "app/common/toaster/toaster.service";

@Component({
    templateUrl: './prosquash.template.html'
})
export class ProsquashComponent extends MessageHandler{

    componentTitle = "ProSquash";

    constructor(@Inject( ToasterToken ) private _toasterToken: any){
        
        // Call super MessageHandler constructor
        super(_toasterToken);
    }

}
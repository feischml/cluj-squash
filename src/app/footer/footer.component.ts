import { Component, Inject } from '@angular/core';
import { MessageHandler } from "app/common/messagehandler/messagehandler";
import { ToasterToken } from "app/common/toaster/toaster.service";

@Component({
    selector: 'custfooter',
    templateUrl: './footer.template.html'
})
export class FooterComponent extends MessageHandler{ 

    constructor(@Inject( ToasterToken ) private _toasterToken: any){

        // Call super MessageHandler constructor
        super(_toasterToken);
    }
}
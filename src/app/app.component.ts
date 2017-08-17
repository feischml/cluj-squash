import { Component, Inject } from '@angular/core';
import { MessageHandler } from "app/common/messagehandler/messagehandler";
import { ToasterToken } from "app/common/toaster/toaster.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent extends MessageHandler{

    constructor(@Inject( ToasterToken ) private _toasterToken: any,){
               
        // Call super MessageHandler constructor
        super(_toasterToken);
    }

}

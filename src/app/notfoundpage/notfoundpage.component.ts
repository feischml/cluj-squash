import { Component, Inject } from '@angular/core';
import { MessageHandler } from "app/common/messagehandler/messagehandler";
import { ToasterToken } from "app/common/toaster/toaster.service";

@Component({
    selector: 'app-notfoundpage',
    templateUrl: './notfoundpage.template.html'
})
export class NotfoundpageComponent extends MessageHandler{

    componentTitle = "Page not found";

    constructor(@Inject( ToasterToken ) private _toasterToken: any) {

        // Call super MessageHandler constructor
        super(_toasterToken);
    }

}

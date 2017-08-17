import { Component, Inject } from '@angular/core';
import { User } from '../people/model/users.model';
import { LclStorageService } from '../lclstorage/lclstorage.service';
import { AppConstants } from '../app.constants';
import { MessageHandler } from "app/common/messagehandler/messagehandler";
import { ToasterToken } from "app/common/toaster/toaster.service";

@Component({
    templateUrl: './home.template.html'
})
export class HomeComponent extends MessageHandler{

    // Get logged in User
    loggedUser: User;
    private lclStorage: LclStorageService;

    constructor(@Inject( ToasterToken ) private _toasterToken: any){

        // Call super MessageHandler constructor
        super(_toasterToken);

        this.lclStorage = new LclStorageService();
        this.loggedUser = JSON.parse(this.lclStorage.getItem(AppConstants.LOGGED_USER));
    }

}
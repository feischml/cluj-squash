import { Component } from '@angular/core';
import { User } from '../people/model/users.model';
import { LclStorageService } from '../lclstorage/lclstorage.service';
import { AppConstants } from '../app.constants';

@Component({
    templateUrl: './home.template.html'
})
export class HomeComponent{

    // Get logged in User
    loggedUser: User;
    private lclStorage: LclStorageService;

    constructor(){
        this.lclStorage = new LclStorageService();
        this.loggedUser = JSON.parse(this.lclStorage.getItem(AppConstants.LOGGED_USER));
    }

}
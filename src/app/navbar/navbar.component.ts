import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LclStorageService } from '../lclstorage/lclstorage.service';
import { AppConstants} from '../app.constants';
import { AuthService } from '../people/service/auth.service';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.template.html',
    providers: [AuthService]
})
export class NavbarComponent {

    loggedUser;
    lclStorage: LclStorageService;
    private appConstants: AppConstants;

    constructor(private _router: Router,
                private _authService: AuthService) {
        this.appConstants = new AppConstants();
        this.lclStorage = new LclStorageService();
        this.loggedUser = this.lclStorage.getItem(AppConstants.LOGGED_USER);
    }

    // Check if router is active -> if yes, set the active property of the current navbar component
    isRouteActive(url: string): boolean {
        return this._router.isActive(url, true);
    }

    // Log Out User
    logOut(){
        this._authService.logoutUser().subscribe(
            res => { 
                alert(res['_body']);
                // Delete logged user
                this.loggedUser = null;
            });
    }

}
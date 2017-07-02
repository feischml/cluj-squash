import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LclStorageService } from '../lclstorage/lclstorage.service';
import { AppConstants} from '../app.constants';
import { AuthService } from '../people/service/auth.service';
import { User } from '../people/model/users.model';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.template.html',
    providers: [AuthService]
})
export class NavbarComponent {

    // Logged User saved in localStorage
    loggedUser: User;
    loggedUserIsAdmin: boolean;
    private lclStorage: LclStorageService;
    private appConstants: AppConstants;

    constructor(private _router: Router,
                private _authService: AuthService) {
        this.appConstants = new AppConstants();
        this.lclStorage = new LclStorageService();
        // Transform String into Object User
        this.loggedUser = JSON.parse(this.lclStorage.getItem(AppConstants.LOGGED_USER));
        this.loggedUserIsAdmin = JSON.parse(this.lclStorage.getItem(AppConstants.LOGGED_ADMIN));
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
                this.refreshLclStorage();
            },
            err => {
                alert("Server error");
                this.refreshLclStorage();
            }
        );
    }

    private refreshLclStorage(){
        // Refresh logged user => this should be null
        this.loggedUser = JSON.parse(this.lclStorage.getItem(AppConstants.LOGGED_USER));
        this.loggedUserIsAdmin = JSON.parse(this.lclStorage.getItem(AppConstants.LOGGED_ADMIN));
    }

}
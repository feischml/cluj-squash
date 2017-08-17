import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { LclStorageService } from '../lclstorage/lclstorage.service';
import { AppConstants} from '../app.constants';
import { AuthService } from '../people/service/auth.service';
import { User } from '../people/model/users.model';
import { MessageHandler } from "app/common/messagehandler/messagehandler";
import { ToasterToken } from "app/common/toaster/toaster.service";

@Component({
    selector: 'navbar',
    templateUrl: './navbar.template.html',
    providers: [ AuthService ]
})
export class NavbarComponent extends MessageHandler{

    // Logged User saved in localStorage
    loggedUser: User;
    loggedUserIsAdmin: boolean;
    private lclStorage: LclStorageService;

    constructor(@Inject( ToasterToken ) private _toasterToken: any,
                private _router: Router,
                private _authService: AuthService) {
        
        // Call super MessageHandler constructor
        super(_toasterToken);

        this.lclStorage = new LclStorageService();
        // Transform String into Object User
        this.loggedUser = JSON.parse(this.lclStorage.getItem(AppConstants.LOGGED_USER));
        this.loggedUserIsAdmin = JSON.parse(this.lclStorage.getItem(AppConstants.LOGGED_ADMIN));
    }

    // Check if router is active -> if yes, set the active property of the current navbar component
    private isRouteActive(url: string): boolean {
        return this._router.isActive(url, true);
    }

    // Log Out User
    private logOut(){
        this._authService.logoutUser().subscribe(
            res => { 
                this.showSuccess(res['_body']);
                this.refreshLclStorage();
                // Navigate to home component, this is a WORKAROUND for communication between Components
                this._router.navigate(['/home']);
            },
            err => {
                this.showError(err._body);
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
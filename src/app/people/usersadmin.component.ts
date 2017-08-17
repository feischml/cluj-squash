import { Component, OnInit, Inject } from '@angular/core';
import { User} from './model/users.model';
import { UsersService} from './service/users.service';
import { RolesService } from '../roles/service/roles.service';
import { MessageHandler } from "app/common/messagehandler/messagehandler";
import { ToasterToken } from "app/common/toaster/toaster.service";

@Component({
    templateUrl: './usersadmin.template.html',
    providers: [ UsersService, RolesService ]
})
export class UsersAdminComponent extends MessageHandler implements OnInit{

    componentTitle = "Manage Users";
    // List of Users (Accounts)
    users = [];

    constructor(@Inject( ToasterToken ) private _toasterToken: any,
                private _userService: UsersService){
        
        // Call super MessageHandler constructor
        super(_toasterToken);
    }

    ngOnInit(){
        this._userService.getAllUsers().subscribe(
            response => this.users = response,
            err => this.showError(err._body)
        );
    }

    // On click Delete
    private deleteUser(user){
        this._userService.deleteUser(user).subscribe(
            res => { 
                let index = this.users.indexOf(res)
                this.users.splice(index,1);
            },
            err => this.showError(err._body)
        );
    }
}
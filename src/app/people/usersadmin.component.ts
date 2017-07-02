import { Component, OnInit } from '@angular/core';
import { User} from './model/users.model';
import { UsersService} from './service/users.service';
import { RolesService } from '../roles/service/roles.service';

@Component({
    templateUrl: './usersadmin.template.html',
    providers: [UsersService, RolesService]
})
export class UsersAdminComponent implements OnInit{

    componentTitle = "Manage Users";

    // List of Users (Accounts)
    users = [];

    constructor(private _userService: UsersService){ }

    ngOnInit(){
        this._userService.getAllUsers().subscribe(
            users => { 
                this.users = users
            },
            err => {
                console.log(err);
            }
        );
    }

    // On click Delete
    deleteUser(user){
        this._userService.deleteUser(user).subscribe(
            res => { 
                let index = this.users.indexOf(res)
                this.users.splice(index,1);
            },
            err => {
                console.log(err);
            }
        );
    }
}
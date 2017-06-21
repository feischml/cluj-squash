import { Component, OnInit } from '@angular/core';
import { User} from './model/users.model';
import { UsersService} from './service/users.service';

@Component({
    templateUrl: './accounts.template.html',
    providers: [UsersService]
})
export class AccountsComponent implements OnInit{

    componentTitle = "Accounts";

    // List of Users (Accounts)
    users = [];

    constructor(private _userService: UsersService){ }

    ngOnInit(){
        this._userService.getAllUsers().subscribe(
            users => { this.users = users},
            err => {
                console.log(err);
            }
        );
    }
}
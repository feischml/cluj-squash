import { Component } from '@angular/core';
import { User } from "app/people/model/users.model";
import { FormGroup, FormBuilder } from "@angular/forms";
import { RolesService } from "app/roles/service/roles.service";
import { UsersService } from "app/people/service/users.service";
import { ActivatedRoute, Router } from "@angular/router";
import { AppConstants } from "app/app.constants";
import { LclStorageService } from "app/lclstorage/lclstorage.service";

@Component({
    templateUrl: './myaccount.template.html',
    providers: [UsersService, RolesService]
})
export class MyAccountComponent{

componentTitle = "Edit my account";

    // User to be edited
    user: User;
    form: FormGroup;
    serverRoles = []; // Roles list in original format
    roles = [];

    private lclStorage: LclStorageService;

    constructor(private _userService: UsersService,
                private _rolesService: RolesService,
                private _route: ActivatedRoute,
                private _router: Router,
                fb: FormBuilder){

        // initialize local storage    
        this.lclStorage = new LclStorageService();

        // create a new user each time sign-up is pressed
        this.user = JSON.parse(this.lclStorage.getItem(AppConstants.LOGGED_USER));

        // Creat the form
        this.form = fb.group({
            username: [],
            email: [],
            password: [],
            phone: [],
            fullname: [],
            birthdate: [],
            roles: []
        });
     }

    ngOnInit(){
        
            var id = this.user["_id"];
            if (!id)
                console.log('Error reading id of User!');
             else{
                this._userService.getUserById(id).subscribe(
                    user => {
                        this.user = user;
                        // Load also roles
                        this._rolesService.getRoles().subscribe(
                            roles => {
                                for (let i = 0; i < roles.length; i++){   
                                    this.serverRoles.push({ id: roles[i]._id, name: roles[i].name, 
                                        selected: false });
                                }
                                this.mapRoles(false);
                            },
                            err => {
                                console.log(err);
                            }
                        );
                    },
                    error => {
                        console.log(error);
                    }
                )
             }   
        
    }

    // Save
    save(){
        // Set the new roles
        this.user.roleIds = [];
        this.roles.forEach(element => {
            if(element.selected == true)
                this.user.roleIds.push(element['id']);
        }); 

        // Update User
        this._userService.updateUser(this.user).subscribe(
            user => {
                this.user = user;
                this._router.navigate(['home']);
            },
            err => { 
                console.log(err)
            }
        );
    }

    private mapRoles(setSelected: Boolean){
        if (setSelected)
            for (let i = 0; i < this.serverRoles.length; i++){   
                this.roles.push({ id: this.serverRoles[i].id, 
                                name: this.serverRoles[i].name, 
                                selected: ( this.user.roleIds.indexOf(this.serverRoles[i].id) == -1 ? false : true ) 
                    });
                }
        else
            for (let i = 0; i < this.serverRoles.length; i++){   
                this.roles.push({ id: this.serverRoles[i].id, 
                                name: this.serverRoles[i].name, 
                                selected: false 
                    });
                }        
    }

}
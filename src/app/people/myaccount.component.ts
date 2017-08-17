import { Component, Inject } from '@angular/core';
import { User } from "app/people/model/users.model";
import { FormGroup, FormBuilder } from "@angular/forms";
import { RolesService } from "app/roles/service/roles.service";
import { UsersService } from "app/people/service/users.service";
import { ActivatedRoute, Router } from "@angular/router";
import { AppConstants } from "app/app.constants";
import { LclStorageService } from "app/lclstorage/lclstorage.service";
import { MessageHandler } from "app/common/messagehandler/messagehandler";
import { ToasterToken } from "app/common/toaster/toaster.service";

@Component({
    templateUrl: './myaccount.template.html',
    providers: [ UsersService, RolesService ]
})
export class MyAccountComponent extends MessageHandler{

componentTitle = "Edit my account";

    // User to be edited
    user: User;
    form: FormGroup;
    serverRoles = []; // Roles list in original format
    roles = [];

    constructor(@Inject( ToasterToken ) private _toasterToken: any,
                private _userService: UsersService,
                private _rolesService: RolesService,
                private _route: ActivatedRoute,
                private _router: Router,
                private _lclStorage: LclStorageService,
                fb: FormBuilder){

        // Call super MessageHandler constructor
        super(_toasterToken);
        // initialize local storage    
        this._lclStorage = new LclStorageService();

        // create a new user each time sign-up is pressed
        this.user = JSON.parse(this._lclStorage.getItem(AppConstants.LOGGED_USER));

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
        let id = this.user["_id"];
        if (!id)
            this.showError('Error reading id of User!');
        else{
            this._userService.getUserById(id).subscribe(
                response => {
                    this.user = response;
                    // Load also roles
                    this._rolesService.getRoles().subscribe(
                        roles => {
                            for (let i = 0; i < roles.length; i++){   
                                this.serverRoles.push({ id: roles[i]._id, name: roles[i].name, 
                                    selected: false });
                            }
                            this.mapRoles(false);
                        },
                        err => this.showError(err._body)
                    );
                },
                error => this.showError(error._body)
            )
        }   
    }

    // Save
    private save(){
        // Set the new roles
        this.user.roleIds = [];
        this.roles.forEach(element => {
            if(element.selected == true)
                this.user.roleIds.push(element['id']);
        }); 

        // Update User
        this._userService.updateUser(this.user).subscribe(
            response => {
                this.user = response;
                this._router.navigate(['home']);
            },
            err => this.showError(err._body)
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
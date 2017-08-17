import { Component, OnInit, Input, Inject } from '@angular/core';
import { UsersService } from '../people/service/users.service';
import { RolesService } from '../roles/service/roles.service';
import { User } from '../people/model/users.model';
//import { Role } from '../roles/model/roles.model';
import { FormBuilder, FormGroup }    from '@angular/forms';
import { MessageHandler } from "app/common/messagehandler/messagehandler";
import { ToasterToken } from "app/common/toaster/toaster.service";

// ToDo - refactor with ng-bootstarp MODAL -> at the moment cannot close when pressed Sign-Up

@Component({
    selector: 'signupmodal',
    templateUrl: './signupmodal.template.html',
    providers: [ UsersService, RolesService ]
})
export class SignupmodalComponent extends MessageHandler implements OnInit{

    // User to be created
    user: User;
    roles = [];
    rePassword: String;
    form: FormGroup;

    constructor(@Inject( ToasterToken ) private _toasterToken: any,
                private _usersService: UsersService,
                fb: FormBuilder,
                private _rolesService: RolesService){ 

        // Call super MessageHandler constructor
        super(_toasterToken);
        
        // create a new user each time sign-up is pressed
        this.user = new User();

        // Creat the form
        this.form = fb.group({
            username: [],
            email: [],
            password: [],
            repassword: [],
            phone: [],
            fullname: [],
            birthdate: [],
            roles: []
        });
    }

    ngOnInit(){
        // Load the list of Roles witch don't have Admin property
        this._rolesService.getRoles().subscribe(
            roles => {
                for (let i = 0; i < roles.length; i++)
                    if (roles[i].admin == false){
                        this.roles.push({ id: roles[i]._id, name:roles[i].name, selected: false});
                    }   
            },
            err => this.showError(err._body)
        );
    }

    // Handle Sign-Up button press
    private register(){
        // Set the selected Roles for the registering User
        this.roles.forEach(element => {
            if(element.selected == true)
                this.user.roleIds.push(element['id']);
        }); 
        this._usersService.registerUser(this.user).subscribe(
            res => {
                this.showSuccess("Registration successfull!");
                // clear all fields
                this.cancel();
            },
            err => {
                this.showError("Registration unsuccessfull, please try again!");
                this.showError(err._body);
                // clear all fields
                this.cancel();
            }
        );
    }

    // Handle Cancel button press
    private cancel(){
        // Reset the values in the fields
        this.user = new User();
        this.form.reset();
    }

}
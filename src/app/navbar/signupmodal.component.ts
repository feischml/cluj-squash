import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../people/service/users.service';
import { User } from '../people/model/users.model';
import { FormBuilder, FormGroup }    from '@angular/forms';

// ToDo - refactor with ng-bootstarp MODAL -> at the moment cannot close when pressed Sign-Up

@Component({
    selector: 'signupmodal',
    templateUrl: './signupmodal.template.html',
    providers: [UsersService]
})
export class SignupmodalComponent implements OnInit{

    // User to be created
    user: User;
    form: FormGroup;

    constructor(private _usersService: UsersService, fb: FormBuilder){ 
        // create a new user each time sign-up is pressed
        this.user = new User();

        // Creat the form
        this.form = fb.group({
            username: [],
            email: [],
            password: [],
            phone: [],
            admin: [],
            fullname: [],
            birthdate: []
        });
    }

    ngOnInit(){

    }

    // Handle Sign-Up button press
    register(){
        console.log(this.user);
        this._usersService.registerUser(this.user).subscribe(
                res => {
                    alert("Registration successfull!");
                },
                err => {
                    console.log(err);
                    alert("Registration unsuccessfull, please try again!")
                    this.user = new User();
                });
    }

    // Handle Cancel button press
    cancel(){
        this.user = new User();
    }

}
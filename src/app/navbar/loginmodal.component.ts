import { Component, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../people/service/auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from '../people/model/users.model';

@Component({
    selector: 'loginmodal',
    templateUrl: './loginmodal.template.html',
    providers: [AuthService]
})
export class LoginmodalComponent{

    form: FormGroup;
    user: User;
    // Emit event when User is logged in
    @Output() on_user_has_logged_in : EventEmitter<any> = new EventEmitter();
    @Output() on_admin_has_logged_in : EventEmitter<any> = new EventEmitter();

    constructor(private _authService: AuthService,
                fb: FormBuilder){
        // Create the form
        this.form = fb.group({
            username: [],
            password: []
        })
        // Create new User
        this.user = new User();
    }

    // Log In pressed
    logIn(){
        var password = this.user.password;
        var username = this.user.username;
        this._authService.loginUser(username, password).subscribe(
            user => {
                if (user){ // login successful
                    this.user = user;
                    this.user.password = password;
                    // Propagate to parent the fact that we are logged in
                    this.on_user_has_logged_in.emit(this.user);
                    //TODO +++++++++++++++++++++++++++++++++++++++++++++++
                    // check if user is admin
                    this.on_admin_has_logged_in.emit(this.user);
                }
            },
            err => alert(err['_body'])
    )};

}
import { Component, Output, EventEmitter, Inject } from '@angular/core';
import { AuthService } from '../people/service/auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from '../people/model/users.model';
import { MessageHandler } from "app/common/messagehandler/messagehandler";
import { ToasterToken } from "app/common/toaster/toaster.service";

@Component({
    selector: 'loginmodal',
    templateUrl: './loginmodal.template.html',
    providers: [ AuthService] 
})
export class LoginmodalComponent extends MessageHandler{

    form: FormGroup;
    user: User;
    // Emit event when User is logged in
    @Output() on_user_has_logged_in : EventEmitter<any> = new EventEmitter();
    @Output() on_admin_has_logged_in : EventEmitter<any> = new EventEmitter();

    constructor(@Inject( ToasterToken ) private _toasterToken: any,
                private _authService: AuthService,
                fb: FormBuilder){

        // Call super MessageHandler constructor
        super(_toasterToken)

        // Create the form
        this.form = fb.group({
            username: [],
            password: []
        })

        // Create new User
        this.user = new User();
    }

    // Log In pressed
    private logIn(){
        let password = this.user.password;
        let username = this.user.username;
        this._authService.loginUser(username, password).subscribe(
            response => {
                if (response){ // login successful
                    this.user = response['user'];
                    this.user.password = password;
                    // Propagate to parent the fact that we are logged in
                    this.on_user_has_logged_in.emit(this.user);
                    this.on_admin_has_logged_in.emit(response['admin']);
                }
            },
            err => this.showError(err._body)
    )};

}
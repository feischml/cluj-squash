import { Component } from '@angular/core';
import { UsersService } from '../people/service/users.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from '../people/model/users.model';

@Component({
    selector: 'loginmodal',
    templateUrl: './loginmodal.template.html',
    providers: [UsersService]
})
export class LoginmodalComponent{

    form: FormGroup;
    user: User;

    constructor(private _usersService: UsersService,
                fb: FormBuilder){
        // create the form
        this.form = fb.group({
            username: [],
            password: []
        })

        this.user = new User();
    }

    logIn(){
        
    }

}
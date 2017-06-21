import { Component, OnInit } from '@angular/core';
import { User} from './model/users.model';
import { UsersService} from './service/users.service';
import { FormBuilder, FormGroup }    from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
    templateUrl: './accountform.template.html',
    providers: [UsersService]
})
export class AccountFormComponent implements OnInit{

    componentTitle = "Edit Account";

    // User to be edited
    user: User;
    form: FormGroup;

    constructor(private _userService: UsersService,
                private _route: ActivatedRoute,
                private _router: Router,
                fb: FormBuilder){
                    
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
        this._route.params.subscribe(params => {
            var id = params["id"];
            if (!id)
                console.log('Error reading id of User!');
             else{
                this._userService.getUserById(id).subscribe(
                    user => {
                        this.user = user;
                    },
                    error => {
                        console.log(error);
                    }
                )
             }   
        });
    }

    // Save
    save(){

    }
}
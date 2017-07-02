import { Component, OnInit } from '@angular/core';
import { RolesService } from './service/roles.service';
import { Router, ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Role } from './model/roles.model';

@Component({
    templateUrl: './rolesformadmin.template.html',
    providers: [RolesService]
})
export class RolesFormAdminComponent implements OnInit{

    componentTitle = "Manage Role Details";

    // Role that will be created or updated
    role = new Role();
    form: FormGroup;
    newRole: Boolean = false;

    constructor(private _rolesService: RolesService,
                private _route: ActivatedRoute,
                private _router: Router,
                fb: FormBuilder){
        // Build the form
        this.form = fb.group({
            roletype: [],
            description: [],
            name: [],
            admin: [],
            basic: []
        });
    }

    ngOnInit(){
        // Get the params from the URL 
        this._route.params.subscribe(params => {
            var id = params["id"];
        if (!id){
            this.newRole = true;
        } else { 
            // Get Role by id
            this._rolesService.getRole(id.toString()).subscribe(
                role => { 
                    this.role = role;  
                }, 
                function(err){
                    console.log(err);
                })  
            }
        });
    }

    // Save changes made in the form
    save(){        
        var result = this._rolesService.updateCreateRole(this.role);
        result.subscribe(res => {
            this._router.navigate(['rolesadmin']);
        },
        err => {
            console.log(err);
        });
    }
}
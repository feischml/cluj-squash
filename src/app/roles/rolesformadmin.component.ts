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

    componentTitle = "Edit Role";

    // Role that will be created or updated
    role = new Role();

    form: FormGroup;

    constructor(private _rolesService: RolesService,
                private _route: ActivatedRoute,
                private _router: Router,
                fb: FormBuilder){

        // Build the form
        this.form = fb.group({
            roletype: [],
            description: [],
            name: [],
            admin: []
        });
    }

    ngOnInit(){
        // Get the params from the URL 
        this._route.params.subscribe(params => {
            var id = params["id"];
        if (!id){
            console.log("Id of role not specified");
        } else { 
            // Get Club by id
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
            this._router.navigate(['roles']);
        });
    }

}
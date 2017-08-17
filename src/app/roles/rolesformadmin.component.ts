import { Component, OnInit, Inject } from '@angular/core';
import { RolesService } from './service/roles.service';
import { Router, ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Role } from './model/roles.model';
import { MessageHandler } from "app/common/messagehandler/messagehandler";
import { ToasterToken } from "app/common/toaster/toaster.service";

@Component({
    templateUrl: './rolesformadmin.template.html',
    providers: [ RolesService ]
})
export class RolesFormAdminComponent extends MessageHandler implements OnInit{

    componentTitle = "Manage Role Details";
    // Role that will be created or updated
    role = new Role();
    form: FormGroup;
    newRole: Boolean = false;

    constructor(@Inject( ToasterToken ) private _toasterToken: any,
                private _rolesService: RolesService,
                private _route: ActivatedRoute,
                private _router: Router,
                fb: FormBuilder){

        // Call super MessageHandler constructor
        super(_toasterToken);

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
            let id = params["id"];
            if (!id){
                this.newRole = true;
            } else { 
                // Get Role by id
                this._rolesService.getRole(id.toString()).subscribe(
                    response => this.role = response, 
                    err => this.showError(err._body)
                )  
            }
        });
    }

    // Save changes made in the form
    private save(){        
        this._rolesService.updateCreateRole(this.role).subscribe(
            res => this._router.navigate(['rolesadmin']),
            err => this.showError(err._body)
        )
    }
}
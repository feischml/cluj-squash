import { Component, OnInit, Inject } from '@angular/core';
import { RolesService } from './service/roles.service';
import { Role } from './model/roles.model';
import { MessageHandler } from "app/common/messagehandler/messagehandler";
import { ToasterToken } from "app/common/toaster/toaster.service";

@Component({
    templateUrl: './rolesadmin.template.html',
    providers: [ RolesService ]
})
export class RolesAdminComponent extends MessageHandler implements OnInit{

    componentTitle = "Manage Roles";
    // List of all the Roles 
    roles = [];
    
    constructor(@Inject( ToasterToken ) private _toasterToken: any,
                private _rolesService: RolesService){ 

        // Call super MessageHandler constructor
        super(_toasterToken);
    }

    ngOnInit(){
        this._rolesService.getRoles().subscribe(
            response => this.roles = response, 
            err => this.showError(err._body)
        ); 
    }

    // Delete Role that is not BASIC Role
    private deleteRole(role: Role){
        this._rolesService.deleteRole(role).subscribe(
            response => {
                if (response){ // if not null then delete it from the table
                    let index = this.roles.indexOf(role);
                    this.roles.splice(index,1);
                }
            },
            err => this.showError(err._body)
        );
    }
}
import { Component, OnInit } from '@angular/core';
import { RolesService } from './service/roles.service';
import { Role } from './model/roles.model';

@Component({
    templateUrl: './rolesadmin.template.html',
    providers: [ RolesService ]
})
export class RolesAdminComponent implements OnInit{

    componentTitle = "Manage Roles";
    // List of all the Roles 
    roles = [];
    constructor(private _rolesService: RolesService){ }

    ngOnInit(){
        this._rolesService.getRoles().subscribe(
            roles => { 
                this.roles = roles;  
            }, 
            function(err){
                console.log(err);
            }
        ); 
    }

    // Delete Role that is not BASIC Role
    deleteRole(role: Role){
        this._rolesService.deleteRole(role).subscribe(
            roleres => {
                if (roleres){ // if not null then delete it from the table
                    let index = this.roles.indexOf(roleres);
                    this.roles.splice(index,1);
                }
            },
            err => console.log(err)
        );
    }
}
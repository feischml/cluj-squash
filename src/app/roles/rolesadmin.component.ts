import { Component, OnInit } from '@angular/core';
import { RolesService } from './service/roles.service';

@Component({
    templateUrl: './rolesadmin.template.html',
    providers: [RolesService]
})
export class RolesAdminComponent implements OnInit{

    componentTitle = "Roles";

    // List of all the Roles
    roles = [];

    constructor(private _rolesService: RolesService){ }

    ngOnInit(){
        this._rolesService.getRoles().subscribe(
            roles => { 
                console.log(roles);
                this.roles = roles;  
            }, 
            function(err){
                console.log(err);
            }
        ); 
    }

}
import { Component, OnInit } from '@angular/core';
import { RolesService } from './service/roles.service';
import { Role } from './model/roles.model';

import { RolesActions } from './ngrx/actions/roles.actions';
import { Store } from '@ngrx/store';
import { RolesStore, RolesState } from './ngrx/reducer/roles.state';

@Component({
    templateUrl: './rolesadmin.template.html',
    providers: [RolesService]
})
export class RolesAdminComponent implements OnInit{

    componentTitle = "Manage Roles";
    // List of all the Roles
    roles = [];
    constructor(private _rolesService: RolesService,
                private roleActions: RolesActions,
                private store: Store<RolesState>
                ){ }

    ngOnInit(){
        // Try to call Store
        this.roles = this.store.select(RolesStore.ROLES);
        
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
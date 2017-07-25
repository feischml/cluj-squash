import { Component, OnInit } from '@angular/core';
import { RolesService } from './service/roles.service';
import { Role } from './model/roles.model';

import { Store } from '@ngrx/store';
import { RolesState } from './ngrx/reducer/roles.state';
import * as RolesActions from './ngrx/actions/roles.actions';

import { Observable } from 'rxjs/Observable';

@Component({
    templateUrl: './rolesadmin.template.html',
    providers: [RolesService]
})
export class RolesAdminComponent implements OnInit{

    componentTitle = "Manage Roles";
    // List of all the Roles
    roles2: Observable<Role[]>;
 
    roles = [];
    constructor(private _rolesService: RolesService,
                private store: Store<RolesState>
                ){ }

    ngOnInit(){
        // Try to call Store ===========================
        this.roles2 = this.store.select('roles');
        this.store.dispatch({type: RolesActions.GET_ROLES_SUCCESS});
        // =============================================

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
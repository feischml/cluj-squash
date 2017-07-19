import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { Role } from '../../model/roles.model';

@Injectable()
export class RolesActions{

// List
    static GET_ROLES = '[Roles] Get Roles';
    getRoles(): Action {
        return {
            type: RolesActions.GET_ROLES
        };
    }

    static GET_ROLES_SUCCESS = '[Roles] Get Roles Success';
    getRolesSuccess(roles): Action {
        return {
            type: RolesActions.GET_ROLES_SUCCESS,
            payload: roles
        };
    }

//**************************************************************/

// Single Object
    static GET_ROLE = '[Role] Get Role';
    getRole(): Action {
        return {
            type: RolesActions.GET_ROLE
        };
    }

    static GET_ROLE_SUCCESS = '[Role] Get Role Success';
    getRoleSuccess(role): Action {
        return {
            type: RolesActions.GET_ROLE_SUCCESS,
            payload: role
        };
    }

}

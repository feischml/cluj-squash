import {compose} from '@ngrx/core/compose';
import {combineReducers} from '@ngrx/store';

import rolesListReducer, * as fromRolesList from './roles-list';
import roleReducer, * as fromRoles from './roles';

export const RolesStore = {
    ROLES: 'roles',
    ROLE: 'role'
} 

export interface RolesState {
    roles: fromRolesList.RolesListState;
    role: fromRoles.RolesState;
};

export default compose(combineReducers)({
    roles: rolesListReducer,
    role: roleReducer
});
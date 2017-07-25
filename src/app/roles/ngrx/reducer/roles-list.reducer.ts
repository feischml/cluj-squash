import { Role } from '../../model/roles.model';
import * as RolesActions from '../actions/roles.actions';

export type RolesListState = Role[];

export type Action = RolesActions.All;

// initial state
const initialState: RolesListState = [];

export function rolesListReducer(state = initialState, action: Action): RolesListState {
    switch (action.type) {
        case RolesActions.GET_ROLES_SUCCESS:
            console.log("what is this?");
            console.log(action.payload);
            return action.payload;
        
        default: 
            return state;
    }
}
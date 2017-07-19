import { Role } from '../../model/roles.model';
import { Action } from '@ngrx/store';
import { RolesActions } from '../actions/roles.actions';

export type RolesState = Role;

// initial state
const initialState: RolesState = new Role();

export default function (state = initialState, action: Action): RolesState {
    switch (action.type) {
        case RolesActions.GET_ROLE_SUCCESS:
            return action.payload;
        default: return state;
    }
}
import { Role } from '../../model/roles.model';
import { Action } from '@ngrx/store';
import { RolesActions } from '../actions/roles.actions';

export type RolesListState = Role[];

// initial state
const initialState: RolesListState = [];

export default function (state = initialState, action: Action): RolesListState {
    switch (action.type) {
        case RolesActions.GET_ROLES_SUCCESS:
            return action.payload;
        default: return state;
    }
}
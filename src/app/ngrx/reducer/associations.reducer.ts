import { Association } from '../../associations/model/association.model';
import * as AssociationsActions from '../actions/associations.actions';

// initial state
const initialState: RolesListState = [];

export function assotiationsReducer(state = initialState, action: AssociationsActions.Actions) {
    switch (action.type) {
        case AssociationsActions.GET_ASSOCIATIONS:
            console.log("what is this?");
            console.log(action.payload);
            return action.payload;
        
        default: 
            return state;
    }
}

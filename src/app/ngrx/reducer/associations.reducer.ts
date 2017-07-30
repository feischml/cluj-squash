import { Association } from '../../associations/model/association.model';
import * as AssociationsActions from '../actions/associations.actions';

// Separate interface for the state of Associations
export interface AssociationState {
  associations: Association[];
  selectedAssotiation: Association;
};

// Define the initial state of the AssociationState
export const initialState: AssociationState = {
    associations: [],
    selectedAssotiation: null
};

export function assotiationsReducer(state = initialState, action: AssociationsActions.Actions) {
    switch (action.type) {
        case AssociationsActions.GET_ASSOCIATIONS:
            return Object.assign( {}, state, {associations: action.payload});
        
        case AssociationsActions.GET_ASSOCIATION:
            console.log("Association: " + action.payload);

        default: 
            return state;
    }
}

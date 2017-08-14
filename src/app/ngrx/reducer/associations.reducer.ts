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

        case AssociationsActions.CREATE_ASSOCIATION:
            return Object.assign( {}, state, {associations: [...state.associations, action.payload]});

        case AssociationsActions.DELETE_ASSOCIATION:
            return state.associations.filter(item => {
                if (item._id != action.payload._id)
                    return item;
            });

        case AssociationsActions.UPDATE_ASSOCIATION:
            return state.associations.map(item => {
                return item._id === action.payload._id ? Object.assign({}, item, action.payload) : item;
            });

        default: 
            return state;
    }
}

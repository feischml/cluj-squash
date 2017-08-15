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
    selectedAssotiation: new Association()
};

export function assotiationsReducer(state = initialState, action: AssociationsActions.Actions) {
    switch (action.type) {
        case AssociationsActions.GET_ASSOCIATIONS:
            return Object.assign( {}, state, {associations: action.payload});
        
        case AssociationsActions.GET_ASSOCIATION:
            return Object.assign( {}, state, {selectedAssotiation: action.payload});

        case AssociationsActions.CREATE_ASSOCIATION:
            return Object.assign( {}, state, {associations: [...state.associations, action.payload]});

        case AssociationsActions.DELETE_ASSOCIATION:
            let deletedAssociationsState = state.associations.filter( item => { 
                if (item._id != action.payload._id) 
                    return item;
            });
            return Object.assign( {}, state, {associations: deletedAssociationsState});

        case AssociationsActions.UPDATE_ASSOCIATION:
            let updatedAssociationsState = state.associations.map(item => {
                return item._id === action.payload._id ? Object.assign({}, item, action.payload) : item;
            });
            return Object.assign( {}, state, {associations: updatedAssociationsState});

        default: 
            return state;
    }
}

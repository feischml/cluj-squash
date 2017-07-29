import { Association } from '../../associations/model/association.model';
// import AssociationState
import * as associationsReducer from '../reducer/associations.reducer'; 

export interface AppState {
    
    associations: associationsReducer.AssociationState
    
    // add here below other state attributes (entities)
    // ...
};
import { Association } from '../../associations/model/association.model';

export interface AppState {
    associations: Association[];
    selectedAssociation: Association;
    // add here below other state attributes (entities)
    // ...
};
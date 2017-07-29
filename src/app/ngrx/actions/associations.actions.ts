import { Action } from '@ngrx/store';

// ********************** Associations BEG ********************** //
import { Association } from '../../associations/model/association.model';

export const GET_ASSOCIATIONS = '[Associations] Get Associations';
export const GET_ASSOCIATION = '[Association] Get Association';

export class GetAssotiationsAction implements Action{
    readonly type = GET_ASSOCIATIONS;
    constructor(public payload: Association[]) { }
}

export class GetAssociationAction implements Action{
    readonly type = GET_ASSOCIATION;
    constructor(public payload: Association) { }
}
// ********************** Associations END ********************** //

// Export the actions
export type Actions = GetAssotiationsAction
     | GetAssociationAction;
     // OtherActions
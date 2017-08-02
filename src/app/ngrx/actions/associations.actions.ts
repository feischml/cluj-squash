import { Action } from '@ngrx/store';
import { Association } from '../../associations/model/association.model';

// Define actions
export const GET_ASSOCIATIONS = '[Associations] Get Associations';
export const GET_ASSOCIATION = '[Association] Get Association';
export const DELETE_ASSOCIATION = '[Associations] Delete Association';
export const UPDATE_ASSOCIATION = '[Associations] Update Association';
export const CREATE_ASSOCIATION = '[Associations] Create Association';

export class GetAssociationsAction implements Action{
    readonly type = GET_ASSOCIATIONS;
    constructor(public payload: Association[]) { }
}

export class DeleteAssociationAction implements Action{
    readonly type = DELETE_ASSOCIATION;
    constructor(public payload: Association) { }
}

export class UpdateAssociationAction implements Action{
    readonly type = UPDATE_ASSOCIATION;
    constructor(public payload: Association) { }
}

export class CreateAssociationAction implements Action{
    readonly type = CREATE_ASSOCIATION;
    constructor(public payload: Association) { };
}

export class GetAssociationAction implements Action{
    readonly type = GET_ASSOCIATION;
    constructor(public payload: Association) { }
}

// Export the actions
export type Actions = GetAssociationsAction
     | GetAssociationAction
     | DeleteAssociationAction
     | UpdateAssociationAction
     | CreateAssociationAction;
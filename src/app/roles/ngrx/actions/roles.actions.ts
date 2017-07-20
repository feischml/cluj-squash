// import { Action } from '@ngrx/store';
// import { Role } from '../../model/roles.model';

// export class RolesActions{
// // List
//     static GET_ROLES = '[Roles] Get Roles';
//     static GET_ROLES_SUCCESS = '[Roles] Get Roles Success';

// //**************************************************************/

// // Single Object
//     static GET_ROLE = '[Role] Get Role';
//     static GET_ROLE_SUCCESS = '[Role] Get Role Success';
// }

// export class GetRoleAction implements Action{
//     readonly type = RolesActions.GET_ROLE;
//     constructor(public payload: String){ }
// }

// export class GetRoleSuccessAction implements Action{
//     readonly type = RolesActions.GET_ROLE_SUCCESS;
//     constructor(public payload: Role){ }
// }

// export class GetRolesAction implements Action{
//     readonly type = RolesActions.GET_ROLES;
//     constructor(public payload: String) { }
// }

// export class GetRolesSuccessAction implements Action{
//     readonly type = RolesActions.GET_ROLES_SUCCESS;
//     constructor(public payload: Role[]) { }
// }

// export type Actions = GetRoleAction | GetRoleSuccessAction | GetRolesAction | GetRolesSuccessAction;
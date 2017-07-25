import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import * as role from '../actions/roles.actions';

import { RolesService } from '../../service/roles.service';
import 'rxjs/Rx';

@Injectable()
export class HeroEffects {
    constructor (
        private update$: Actions,
        private rolesActions: role.GetRolesSuccessAction,
        private svc: RolesService
    ){ }

    @Effect() loadRules$ = this.update$
        .ofType(role.GET_ROLES_SUCCESS)
        .switchMap(
            () => this.svc.getRoles()
                .map(roles => { this.rolesActions.payload;
                    console.log("effect called");}
                    ));

}


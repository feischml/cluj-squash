import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppConstants} from '../../app.constants';
import { Association} from '../model/association.model';
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { AppState } from '../../ngrx/storestate/app.state';
import * as associationActions from '../../ngrx/actions/associations.actions';

@Injectable()
export class AssociationService{

    // Application Constants
    private appConstants;

    // Associations Observable - for selecting and deleting entries
    associations$: Observable<Association[]>;

    // Selected Association Observable - for create and update
    selectedAssociation$: Observable<Association>;

    constructor( private _http: Http,
                 private _store: Store<AppState> ){
        
        this.appConstants = new AppConstants();

        this.associations$ = this._store.select(
            (state:AppState) => {
                return state.associations
            }
        ).select('associations');

        this.selectedAssociation$ = this._store.select(
            (state:AppState) => {
                return state.associations
            }
        ).select('selectedAssotiation');
    }

    // Rerturn the list of Associations and dispatch to store
    getAssociationsDispatch(){
        var route = '/associations/associations';
        this._http.get(
                this.appConstants.getServerUrl() + route,
                { headers: this.appConstants.getHeaders() })
            .map( associations => associations.json())
            .map( payload => ({ type: associationActions.GET_ASSOCIATIONS, payload: payload}) )
            .subscribe( action => this._store.dispatch(action));
    }

    // Delete Association and despatch to store
    deleteAssociationDispatch(association: Association){
        var route = '/associations/delete/';
        if (association._id){
            route = route + association._id;
            this._http.delete(
                this.appConstants.getServerUrl() + route,
                { headers: this.appConstants.getHeaders() }
            )
            .map( res => res.json())
            .map( payload => ({ type: associationActions.DELETE_ASSOCIATION, payload: payload }) )
            .subscribe( action => this._store.dispatch(action));
        } else {
            alert("Can't delete Association, inconsistent data.");
        }
    }

    // Return an Association with a given id and dispatch to store
    getAssociationDispatch(association: Association){
        this._store.dispatch({ type: associationActions.GET_ASSOCIATION, payload: association });
    }

    // Update or create an Association and dispatch to store
    updateCreateAssociationDispatch(association: Association){
        var route;
        if (!association._id){
            route = '/associations/create';
            this._http.post(
                    this.appConstants.getServerUrl() + route, 
                    JSON.stringify(association),
                    { headers: this.appConstants.getHeaders() }
                ).map(res => res.json())
                 .map( payload => ({ type: associationActions.CREATE_ASSOCIATION, payload: payload }) )
                 .subscribe( action => this._store.dispatch(action));
        } else {
            route = '/associations/update';  
            this._http.put(
                    this.appConstants.getServerUrl() + route, 
                    JSON.stringify(association),
                    { headers: this.appConstants.getHeaders() }
                ).map(res => res.json())
                 .map( payload => ({ type: associationActions.UPDATE_ASSOCIATION, payload: payload }) )
                 .subscribe( action => this._store.dispatch(action));
        }
    }

// *************** Old Implementation ***************

    // Return the list of Associations from the server
    // getAssociations(){
    //     var route = '/associations/associations';
    //     return this._http.get(
    //             this.appConstants.getServerUrl() + route,
    //             { headers: this.appConstants.getHeaders() }).
    //         map( associations => associations.json());
    // }

    // Return an Association with a given id
    // getAssociation(id: String){
    //     var route = '/associations/associationid/' + id;
    //     return this._http.get(
    //             this.appConstants.getServerUrl() + route,
    //             { headers: this.appConstants.getHeaders() }).
    //         map( association => association.json());        
    // }

    // Update or create an Association
    // updateCreateAssociation(association: Association){
    //     var route;
    //     if (!association._id){
    //         route = '/associations/create';
    //         return this._http.post(
    //                 this.appConstants.getServerUrl() + route, 
    //                 JSON.stringify(association),
    //                 { headers: this.appConstants.getHeaders() }
    //             ).map(res => res.json());
    //     } else {
    //         route = '/associations/update';  
    //         return this._http.put(
    //                 this.appConstants.getServerUrl() + route, 
    //                 JSON.stringify(association),
    //                 { headers: this.appConstants.getHeaders() }
    //             ).map(res => res.json());
    //     }
    // }

    // Delete Association
    // deleteAssociation(association: Association){
    //     var route = '/associations/delete/';
    //     if (association._id){
    //         route = route + association._id;
    //         return this._http.delete(
    //             this.appConstants.getServerUrl() + route,
    //             { headers: this.appConstants.getHeaders() }
    //         ).map( res => res.json());
    //     } else {
    //         alert("Can't delete Association, inconsistent data.");
    //     }
    // }

}
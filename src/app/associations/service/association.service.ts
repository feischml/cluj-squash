import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppConstants} from '../../app.constants';
import { Association} from '../model/association.model';

import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { AppState } from '../../ngrx/storestate/app.state';
import * as associationActions from '../../ngrx/actions/associations.actions';
import { AssociationState } from "app/ngrx/reducer/associations.reducer";

@Injectable()
export class AssociationService{

    // Application Constants
    private appConstants;

    // Associations
    associations$: Observable<Association[]>;
    //associations$: Association[];

    constructor( private _http: Http,
                 private _store: Store<AssociationState> ){
        
        this.appConstants = new AppConstants();

        this.associations$ = this._store.//select(
            //(state:AppState) => {
            //    return state.associations
            //}
        //).
        select('associations');//.subscribe(res => { this.associations$ = res; console.log(res); }); 
        //console.log(this.associations$);
    }

    getAssociationsDispatch(){
        var route = '/associations/associations';
        console.log("Calling action GET_ASSOCIATIONS");
        this._http.get(
                this.appConstants.getServerUrl() + route,
                { headers: this.appConstants.getHeaders() })
            .map( associations => associations.json())
            .map( payload => ({ type: associationActions.GET_ASSOCIATIONS, payload: payload}) )
            .subscribe( action => this._store.dispatch(action));
        //console.log(this._store.select<Association[]>( state => { console.log("State: " + state.associations);
        //return state.associations;} ));

        //console.log(this.associations$);
        this._store.select('associations').subscribe( ass => console.log("ass: " + ass));
    }

     // Return the list of Associations from the server
    getAssociations(){
        var route = '/associations/associations';
        return this._http.get(
                this.appConstants.getServerUrl() + route,
                { headers: this.appConstants.getHeaders() }).
            map( associations => associations.json());
    }

    // Return an Association with a given id
    getAssociation(id: String){
        var route = '/associations/associationid/' + id;
        return this._http.get(
                this.appConstants.getServerUrl() + route,
                { headers: this.appConstants.getHeaders() }).
            map( association => association.json());        
    }

    // Update or create an Association
    updateCreateAssociation(association: Association){
        var route;
        if (!association._id){
            route = '/associations/create';
            return this._http.post(
                    this.appConstants.getServerUrl() + route, 
                    JSON.stringify(association),
                    { headers: this.appConstants.getHeaders() }
                ).map(res => res.json());
        } else {
            route = '/associations/update';  
            return this._http.put(
                    this.appConstants.getServerUrl() + route, 
                    JSON.stringify(association),
                    { headers: this.appConstants.getHeaders() }
                ).map(res => res.json());
        }
    }

    // Delete Association
    deleteAssociation(association: Association){
        var route = '/associations/delete/';
        if (association._id){
            route = route + association._id;
            return this._http.delete(
                this.appConstants.getServerUrl() + route,
                { headers: this.appConstants.getHeaders() }
            ).map( res => res.json());
        } else {
            alert("Can't delete Association, inconsistent data.");
        }
    }

}
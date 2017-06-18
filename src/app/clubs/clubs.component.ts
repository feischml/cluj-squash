import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ClubsService } from './clubs.service';
import 'rxjs/add/operator/switchMap';

@Component({
    templateUrl: './clubs.template.html',
    providers: [ ClubsService ]
})
export class ClubsComponent{

    componentTitle = "Clubs";
    clubs = [];

    constructor( private _clubService: ClubsService,
                 private _router: Router,
                 private _route: ActivatedRoute){ }

    // When the component is initialized get the list of clubs
    ngOnInit(){
        this._clubService.getClubs().subscribe(
            function(clubs){
                this.clubs = clubs;
                // ToDo delete - for check purpose - show it in the console
                console.log(this.clubs);
            },
            function(err){
                console.log(err);
            }
        );
        
    }

}
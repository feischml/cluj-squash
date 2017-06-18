import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ClubsService } from './service/clubs.service';
import 'rxjs/add/operator/switchMap';

@Component({
    templateUrl: './clubs.template.html',
    providers: [ ClubsService ]
})
export class ClubsComponent implements OnInit{

    componentTitle = "Clubs";

    // List of all the clubs
    clubs = [];

    constructor( private _clubService: ClubsService,
                 private _router: Router,
                 private _route: ActivatedRoute){ }

    // When the component is initialized get the list of clubs
    ngOnInit(){
        this._clubService.getClubs().subscribe(
            clubs => { 
                this.clubs = clubs;  
            }, 
            function(err){
                console.log(err);
            }
        );
        
    }

}
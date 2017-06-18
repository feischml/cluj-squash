import { Component, OnInit } from '@angular/core';
import { ClubsService } from './clubs.service';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
    templateUrl: './clubsform.template.html',
    providers: [ ClubsService ]
})
export class ClubsFormComponent{

    constructor(private _clubsService: ClubsService,
                private _route: ActivatedRoute,
                private _router: Router){ }

    ngOnInit(){
        this._route.params.subscribe(params => {
            var id = params["id"];
            var name = params["name"];
        if (!id){
            // Get club by name
            if (!name){
                return;
            } else {
                this._clubsService.getClub(name.toString()).subscribe(function(club){
                    // ToDo delete - for check purpose - show it in the console
                    console.log(club);
                },
                function(err){
                    console.log(err);
                })
            }
        } else { 
            // Get Club by id
            this._clubsService.getClub("", id.toString()).subscribe(function(club){
                    // ToDo delete - for check purpose - show it in the console
                    console.log(club);
                },
                function(err){
                    console.log(err);
                })  
            }
        });

    }
}
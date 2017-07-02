import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ClubsService } from '../service/clubs.service';
import { Club } from '../model/club.model';

@Component({
    templateUrl: './clubsadmin.template.html',
    providers: [ ClubsService ]
})
export class ClubsAdminComponent implements OnInit{

    componentTitle = "Manage Clubs";

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
            err => console.log(err)
        );   
    }

    // Delete Club
    deleteClub(club: Club){
        this._clubService.deleteClub(club).subscribe(
            club => {
                let index = this.clubs.indexOf(club);
                this.clubs.splice(index,1);
            },
            err => console.log(err)
        )
    }

}
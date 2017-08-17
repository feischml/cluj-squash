import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ClubsService } from '../service/clubs.service';
import { Club } from '../model/club.model';
import { MessageHandler } from "app/common/messagehandler/messagehandler";
import { ToasterToken } from "app/common/toaster/toaster.service";

@Component({
    templateUrl: './clubsadmin.template.html',
    providers: [ ClubsService ]
})
export class ClubsAdminComponent extends MessageHandler implements OnInit{

    componentTitle = "Manage Clubs";
    // List of all the clubs
    clubs = [];

    constructor(@Inject( ToasterToken ) private _toasterToken: any,
                private _clubService: ClubsService,
                private _router: Router,
                private _route: ActivatedRoute) {

        // Call super MessageHandler constructor
        super(_toasterToken);
    }

    // When the component is initialized get the list of clubs
    ngOnInit(){
        this._clubService.getClubs().subscribe(
            response => this.clubs = response, 
            err => this.showError(err._body)
        );   
    }

    // Delete Club
    private deleteClub(club: Club){
        this._clubService.deleteClub(club).subscribe(
            response => {
                let index = this.clubs.indexOf(response);
                this.clubs.splice(index,1);
            },
            err => this.showError(err._body)
        )
    }

}
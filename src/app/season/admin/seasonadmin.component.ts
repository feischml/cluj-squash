import { Component, OnInit, Inject } from '@angular/core';
import { SeasonService } from '../service/season.service';
import { Season } from '../model/season.model';
import { MessageHandler } from "app/common/messagehandler/messagehandler";
import { ToasterToken } from "app/common/toaster/toaster.service";

@Component({
    templateUrl: 'seasonadmin.template.html',
    providers: [ SeasonService ]
})
export class SeasonAdminComponent extends MessageHandler implements OnInit{

    componentTitle = "Manage Seasons";
    // List of Seasons
    seasons = [];

    constructor(@Inject( ToasterToken ) private _toasterToken: any,
                private _seasonService: SeasonService){
                    
        // Call super MessageHandler constructor
        super(_toasterToken);
    }

    ngOnInit(){
        // Load the Seasons list
        this._seasonService.getSeasons().subscribe(
            response => this.seasons = response,
            err => this.showError(err._body)
        );
    }

    // Delete Season from list
    private deleteSeason(seasonToDelete: Season){
        this._seasonService.deleteSeason(seasonToDelete).subscribe(
            response => {
                let index = this.seasons.indexOf(seasonToDelete);
                this.seasons.splice(index,1);
            },
            err => this.showError(err._body)
        );
    }

}
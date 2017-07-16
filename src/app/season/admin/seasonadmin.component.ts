import { Component, OnInit } from '@angular/core';
import { SeasonService } from '../service/season.service';
import { Season } from '../model/season.model';

@Component({
    templateUrl: 'seasonadmin.template.html',
    providers: [SeasonService]
})
export class SeasonAdminComponent implements OnInit{

    componentTitle = "Manage Seasons";

    // List of Seasons
    seasons = [];

    constructor(private _seasonService: SeasonService){ }

    ngOnInit(){
        // Load the Seasons list
        this._seasonService.getSeasons().subscribe(
            seasons => {
                this.seasons = seasons
            },
            err => console.log(err)
        );
    }

    // Delete Season from list
    deleteSeason(seasonToDelete: Season){
        this._seasonService.deleteSeason(seasonToDelete).subscribe(
            season => {
                let index = this.seasons.indexOf(seasonToDelete);
                this.seasons.splice(index,1);
            },
            err => console.log(err)
        );
    }

}
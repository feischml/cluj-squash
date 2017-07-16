import { Component, OnInit } from '@angular/core';
import { SeasonTypeService } from '../service/seasontype.service';
import { SeasonType } from '../model/seasontype.model';

@Component({
    templateUrl: 'seasontypeadmin.template.html',
    providers: [SeasonTypeService]
})
export class SeasonTypeAdminComponent implements OnInit{

    componentTitle = "Manage Season Types";

    // List of Season Types
    seasontypes = [];

    constructor(private _seasonTypeService: SeasonTypeService){ }

    ngOnInit(){
        // Load the Season Types list
        this._seasonTypeService.getSeasonTypes().subscribe(
            seasontypes => {
                this.seasontypes = seasontypes
            },
            err => console.log(err)
        );
    }

    // Delete SeasonType from list
    deleteSeasonType(seasontypeToDelete: SeasonType){
        this._seasonTypeService.deleteSeasonType(seasontypeToDelete).subscribe(
            seasontype => {
                let index = this.seasontypes.indexOf(seasontypeToDelete);
                this.seasontypes.splice(index,1);
            },
            err => console.log(err)
        );
    }

}
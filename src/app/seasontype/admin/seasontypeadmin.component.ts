import { Component, OnInit, Inject } from '@angular/core';
import { SeasonTypeService } from '../service/seasontype.service';
import { SeasonType } from '../model/seasontype.model';
import { MessageHandler } from "app/common/messagehandler/messagehandler";
import { ToasterToken } from "app/common/toaster/toaster.service";

@Component({
    templateUrl: 'seasontypeadmin.template.html',
    providers: [ SeasonTypeService ]
})
export class SeasonTypeAdminComponent extends MessageHandler implements OnInit{

    componentTitle = "Manage Season Types";
    // List of Season Types
    seasontypes = [];

    constructor(@Inject( ToasterToken ) private _toasterToken: any,
                private _seasonTypeService: SeasonTypeService){

        // Call super MessageHandler constructor
        super(_toasterToken);
     }

    ngOnInit(){
        // Load the Season Types list
        this._seasonTypeService.getSeasonTypes().subscribe(
            response =>  this.seasontypes = response,
            err => this.showError(err._body)
        );
    }

    // Delete SeasonType from list
    private deleteSeasonType(seasontypeToDelete: SeasonType){
        this._seasonTypeService.deleteSeasonType(seasontypeToDelete).subscribe(
            seasontype => {
                let index = this.seasontypes.indexOf(seasontypeToDelete);
                this.seasontypes.splice(index,1);
            },
            err => this.showError(err._body)
        );
    }

}
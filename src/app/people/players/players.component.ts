import { Component, OnInit, Inject } from '@angular/core';
import { PlayersService} from '../service/players.service';
import { MessageHandler } from "app/common/messagehandler/messagehandler";
import { ToasterToken } from "app/common/toaster/toaster.service";


@Component({
    templateUrl: './players.template.html',
    providers: [ PlayersService ]
})
export class PlayersComponent extends MessageHandler implements OnInit{

    componentTitle = "Players";
    players = [];

    constructor(@Inject( ToasterToken ) private _toasterToken: any,
                private _playersService: PlayersService){

        // Call super MessageHandler constructor
        super(_toasterToken);
    }

    ngOnInit(){
        this._playersService.getAllPlayers().subscribe(
            response => this.players = response,
            err => this.showError(err._body)
        );
    }

}
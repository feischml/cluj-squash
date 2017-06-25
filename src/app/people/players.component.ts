import { Component, OnInit } from '@angular/core';
import { PlayersService} from './service/players.service';


@Component({
    templateUrl: './players.template.html',
    providers: [PlayersService]
})
export class PlayersComponent implements OnInit{

    componentTitle = "Players";
    players = [];

    constructor(private _playersService: PlayersService){ }

    ngOnInit(){
        this._playersService.getAllPlayers().subscribe(
            players => {
                this.players = players;
            },
            err => {
                console.log(err);
            });
    }

}
import { Component, OnInit, Inject } from '@angular/core';
import { PlayersService } from '../service/players.service';
import { PlayerUser } from '../model/playeruser.model'; 
import { FormGroup, FormBuilder} from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';
import { MessageHandler } from "app/common/messagehandler/messagehandler";
import { ToasterToken } from "app/common/toaster/toaster.service";

@Component({
    templateUrl: './playersdetail.template.html',
    providers: [ PlayersService ]
})
export class PlayersDetailComponent extends MessageHandler implements OnInit{

    componentTitle = "Player Detail";
    form: FormGroup;
    playerUser: PlayerUser;

    constructor(@Inject( ToasterToken ) private _toasterToken: any,
                private _playersService: PlayersService,
                fb: FormBuilder,
                private _route: ActivatedRoute,
                private _router: Router){

        // Call super MessageHandler constructor
        super(_toasterToken);

        // Init PlayerUser
        this.playerUser = new PlayerUser();

        // Build the form
        this.form = fb.group({
            email: [],
            phone: [],
            fullname: [],
            birthdate: [],
            bestlocalranking: [],
            bestnationalranking: [],
            bestnationalrankingdate: [],
            achieventdescription: []
        });

    }

    // Load the Player with the User details
    ngOnInit(){
        this._route.params.subscribe(params => {
            let id = params["id"];
            if (!id)
                this.showError('Error reading id of Player!');
            else{
                this._playersService.getPlayerById(id).subscribe(
                    response => this.playerUser = response,
                    err => this.showError(err._body)
                );
            }
        }
    )}

    // Save Player relevant details
    private save(){
        this._playersService.updatePlayer(this.playerUser).subscribe(
            response => {
                this.playerUser = response;
                this._router.navigate(['players']);
            },
            err => this.showError(err._body)
        );
    }

}

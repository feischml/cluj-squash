import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../../service/players.service';
import { PlayerUser } from '../../model/playeruser.model'; 
import { FormGroup, FormBuilder} from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
    templateUrl: './playersdetailadmin.template.html',
    providers: [PlayersService]
})
export class PlayersDetailAdminComponent implements OnInit{

    componentTitle = "Player Detail";
    form: FormGroup;
    playerUser: PlayerUser;

    constructor(private _playersService: PlayersService,
                fb: FormBuilder,
                private _route: ActivatedRoute,
                private _router: Router){
        
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
            var id = params["id"];
            if (!id)
                console.log('Error reading id of Player!');
             else{
                this._playersService.getPlayerById(id).subscribe(
                    playerUser => {
                        this.playerUser = playerUser;
                    },
                    err => {
                        console.log(err);
                    });
             }
        }
    )}

    // Save Player relevant details
    save(){
        this._playersService.updatePlayer(this.playerUser).subscribe(
            playerUser => {
                this.playerUser = playerUser;
                this._router.navigate(['playersadmin']);
            },
            err => { 
                console.log(err)
            }
        );
    }

}

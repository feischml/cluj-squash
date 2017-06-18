import { Component, OnInit } from '@angular/core';
import { ClubsService } from './service/clubs.service';
import { Router, ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup }    from '@angular/forms';
import { Club } from './model/club.model';

@Component({
    templateUrl: './clubsform.template.html',
    providers: [ ClubsService ]
})
export class ClubsFormComponent implements OnInit{ 

    form: FormGroup;

    // The actual club edited in the form
    club = new Club();

    constructor( fb: FormBuilder,
                private _clubsService: ClubsService,
                private _route: ActivatedRoute,
                private _router: Router){
    
    // Build the form
        this.form = fb.group({
            clubname: [],
            description: [],
            phone: [],
            webpage: []
        });
    }

    ngOnInit(){
        // Get the params from the URL 
        this._route.params.subscribe(params => {
            var id = params["id"];
            var name = params["name"];
        if (!id){
            // Get club by name
            if (!name){
                return;
            } else {
                this._clubsService.getClub(name.toString()).subscribe(
                    club => { 
                        this.club = club;  
                    }, 
                    function(err){
                        console.log(err);
                    } 
                )
            }
        } else { 
            // Get Club by id
            this._clubsService.getClub("", id.toString()).subscribe(
                club => { 
                    this.club = club;  
                }, 
                function(err){
                    console.log(err);
                })  
            }
        });
    }

    // Save changes made in the form
    save(){        
        var result = this._clubsService.updateCreateClub(this.club);
        result.subscribe(res => {
            console.log(res);
            this._router.navigate(['clubs']);
        });
    }
}
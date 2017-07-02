import { Component, OnInit } from '@angular/core';
import { CoachesService } from '../../service/coaches.service';
import { CoachUser } from '../../model/coachuser.model'; 
import { FormGroup, FormBuilder} from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
    templateUrl: './coachesdetailadmin.template.html',
    providers: [CoachesService]
})
export class CoachesDetailAdminComponent implements OnInit{

    // Coach with details which will be on the screen
    coachUser: CoachUser;
    form: FormGroup;

    componentTitle = "Manage Coach Details";

    constructor(private _coachService: CoachesService,
                fb: FormBuilder,
                private _route: ActivatedRoute,
                private _router: Router){
        
        // Init coachUser
        this.coachUser = new CoachUser();

        // Build the form
        this.form = fb.group({
            email: [],
            phone: [],
            fullname: [],
            birthdate: [],
            achivementdescription: [],
            experiencedescription: []
        });

    }

    // Load the Coach with the User details
    ngOnInit(){
        this._route.params.subscribe(params => {
            var id = params["id"];
            if (!id)
                console.log('Error reading id of Coach!');
             else{
                this._coachService.getCoachById(id).subscribe(
                    coachUser => {
                        this.coachUser = coachUser;
                    },
                    err => {
                        console.log(err);
                    });
             }
        }
    )}

    // Save coach reelevant details
    save(){
        this._coachService.updateCoach(this.coachUser).subscribe(
            coachUser => {
                this.coachUser = coachUser;
                this._router.navigate(['coachesadmin']);
            },
            err => { 
                console.log(err)
            }
        );
    }

}
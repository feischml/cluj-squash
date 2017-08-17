import { Component, OnInit, Inject } from '@angular/core';
import { CoachesService } from '../service/coaches.service';
import { CoachUser } from '../model/coachuser.model'; 
import { FormGroup, FormBuilder} from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';
import { MessageHandler } from "app/common/messagehandler/messagehandler";
import { ToasterToken } from "app/common/toaster/toaster.service";

@Component({
    templateUrl: './coachesdetail.template.html',
    providers: [ CoachesService ]
})
export class CoachesDetailComponent extends MessageHandler implements OnInit{

    // Coach with details which will be on the screen
    coachUser: CoachUser;
    form: FormGroup;
    componentTitle = "Coach Detail";

    constructor(@Inject( ToasterToken ) private _toasterToken: any,
                private _coachService: CoachesService,
                fb: FormBuilder,
                private _route: ActivatedRoute,
                private _router: Router){
        
        // Call super MessageHandler constructor
        super(_toasterToken);

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
            let id = params["id"];
            if (!id)
                this.showError('Error reading id of Coach!');
            else{
                this._coachService.getCoachById(id).subscribe(
                    response => this.coachUser = response,
                    err => this.showError(err._body)
                );
            }
        }
    )}

    // Save coach reelevant details
    private save(){
        this._coachService.updateCoach(this.coachUser).subscribe(
            response => {
                this.coachUser = response;
                this._router.navigate(['coaches']);
            },
            err => this.showError(err._body)
        );
    }

}
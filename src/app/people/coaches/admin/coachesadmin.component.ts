import { Component, OnInit } from '@angular/core';
import { CoachesService } from '../../service/coaches.service';

@Component({
    templateUrl: './coachesadmin.template.html',
    providers: [CoachesService]
})
export class CoachesAdminComponent implements OnInit{

    componentTitle = "Manage Coaches";
    coaches = [];

    constructor(private _coachesService: CoachesService){ }

    ngOnInit(){
        this._coachesService.getAllCoaches().subscribe(
            coaches => {
                this.coaches = coaches;
            },
            err => {
                console.log(err);
            });
    }

}
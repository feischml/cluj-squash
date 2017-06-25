import { Component, OnInit } from '@angular/core';
import { CoachesService } from './service/coaches.service';

@Component({
    templateUrl: './coaches.template.html',
    styleUrls: ['./styles/coaches.component.css'],
    providers: [CoachesService]
})
export class CoachesComponent implements OnInit{

    componentTitle = "Coaches";
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
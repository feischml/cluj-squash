import { Component, OnInit } from '@angular/core';
import { Rankings } from '../model/rankings.model';
import { RankingsDetail } from '../model/rankingsdetail.model';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RankingsService } from '../service/rankings.service';
import { EventsService } from '../../events/service/events.service';

@Component({
    templateUrl: 'rankingsformadmin.template.html',
    providers: [ RankingsService, EventsService ]
})
export class RankingsFormAdminComponent implements OnInit{

    componentTitle = "Manage Ranking";

    // Ranking that will be created or updated
    ranking: Rankings = new Rankings();

    form: FormGroup;

    constructor(private _rankingsService: RankingsService,
                 private _eventsService: EventsService,
                 private _route: ActivatedRoute,
                 private _router: Router,
                 private fb: FormBuilder){
    
        // Get the params from the URL 
        this._route.params.subscribe(params => {
            var rankId = params["rankId"];
        if (rankId && rankId != 'undefined'){
            // Get Ranking by id
            this._rankingsService.getRanking(rankId.toString()).subscribe(
                ranking => { 
                    if (ranking){
                        this.ranking = ranking; 
                        this.patchValues(); 
                    }
                }, 
                function(err){
                    console.log(err); 
                })  
            }
        });

    }

    ngOnInit(){
        this.form = this.fb.group({
            details: this.fb.array([]) 
        });  
    }

    private patchValues() {
        let control = <FormArray>this.form.controls['details'];
        this.ranking.details.forEach(x => {
            control.push(this.patch(x._id, x.position, x.points, x.fullname));
        })
    }

    private patch(_id, position, points, fullname){
        return this.fb.group({
            _id: [_id],
            position: [position],
            points: [points],
            fullname: [fullname]
        });
    }

    private initDetails() {
        return this.fb.group({
            _id: [''],
            position: [''],
            points: [''],
            fullname: ['']
        });
    }

    private addRanking() {
        const control = <FormArray>this.form.controls['details'];
        control.push(this.initDetails());
    }

    save(form){
        this.ranking.details = form.value['details'];
        var result = this._rankingsService.updateCreateRanking(this.ranking);
        result.subscribe(res => {
            //if (this._router.url.indexOf('eventrankingid') > -1){
                // Update Event with new ID
                console.log(res);

                this._eventsService.updateRankingId(res['_id'],this._route.snapshot.params['eventId']).subscribe(
                    res => res,
                    err => console.log(err)
                )
                this._router.navigate(['eventsadmin']);
            //} else {
            //    
            //}
        },
        err => {
            console.log(err);
        });
    }

    private deleteRanking(position){
         const control = <FormArray>this.form.controls['details'];
         control.removeAt(position);
         this.ranking.details.splice(position, 1);
     }

}
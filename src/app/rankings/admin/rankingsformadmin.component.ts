import { Component, OnInit, Inject } from '@angular/core';
import { Rankings } from '../model/rankings.model';
import { RankingsDetail } from '../model/rankingsdetail.model';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RankingsService } from '../service/rankings.service';
import { EventsService } from '../../events/service/events.service';
import { SeasonService } from '../../season/service/season.service';
import { MessageHandler } from "app/common/messagehandler/messagehandler";
import { ToasterToken } from "app/common/toaster/toaster.service";

@Component({
    templateUrl: 'rankingsformadmin.template.html',
    providers: [ RankingsService, EventsService, SeasonService ]
})
export class RankingsFormAdminComponent extends MessageHandler implements OnInit{

    componentTitle = "Manage Ranking";
    // Ranking that will be created or updated
    ranking: Rankings = new Rankings();
    form: FormGroup;

    constructor( @Inject( ToasterToken ) private _toasterToken: any,
                 private _rankingsService: RankingsService,
                 private _eventsService: EventsService,
                 private _seasonService: SeasonService,
                 private _route: ActivatedRoute,
                 private _router: Router,
                 private fb: FormBuilder){

        // Call super MessageHandler constructor
        super(_toasterToken);

        // Get the params from the URL 
        this._route.params.subscribe(params => {
            let rankId = params["rankId"];
            if (rankId && rankId != 'undefined')
                // Get Ranking by id
                this._rankingsService.getRanking(rankId.toString()).subscribe(
                    response => {
                        if (response){
                            this.ranking = response; 
                            this.patchValues(); 
                        }
                    }, 
                    err => this.showError(err._body)
                )
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
        this._rankingsService.updateCreateRanking(this.ranking).subscribe(
            res => {
                // Update Event since we are working with an event
                if (this._route.snapshot.params['eventId']){
                    this._eventsService.updateRankingId(res['_id'],this._route.snapshot.params['eventId']).subscribe(
                        res => res,
                        err => this.showError(err._body)
                    );
                    this._router.navigate(['eventsadmin']);
                }

                if (this._route.snapshot.params['seasonId']){
                    this._seasonService.updateActualRanking(res['_id'], this._route.snapshot.params['seasonId']).subscribe(
                        res => res,
                        err => this.showError(err._body)
                    );
                    this._router.navigate(['seasonadmin']);
                }
            },
            err => this.showError(err._body)
        );
    }

    private deleteRanking(position){
         const control = <FormArray>this.form.controls['details'];
         control.removeAt(position);
         this.ranking.details.splice(position, 1);
    }

}
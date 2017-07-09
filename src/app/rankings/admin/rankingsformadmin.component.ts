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
    ranking: Rankings;

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
                    console.log(JSON.stringify(ranking));
                    
    this.ranking = JSON.parse(JSON.stringify(ranking));  
                    // Build the form
        this.form = this.fb.group({
            //details: this.fb.array([this.initRankingsDetail()])

            details: this.fb.array(
        this.ranking.details.map(x => this.fb.group({
          _id: [x._id],
          position: [x.position],
          points: [x.points],
          fullname: [x.fullname]
        })))

    });  
                    }else{
                        this.addRanking();
                    }



                }, 
                function(err){
                    console.log(err); 
                })  
            }
        });

             


    }

    ngOnInit(){

                               

    }

    initRankingsDetail() {
        // initialize our address
        return this.fb.group(//{
            //position: [''],
            //points: [''],
            //fullname: ['']
            new RankingsDetail()
            //this.ranking.details
        //}
        );
    }

    // Save changes made in the form
    private save(form){        
        console.log(form.value);
        this.ranking.details = form.value['details'];
        console.log(JSON.stringify(this.ranking));
        var result = this._rankingsService.updateCreateRanking(this.ranking);
        result.subscribe(res => {
            console.log(this._router.url);
            if (this._router.url.indexOf('eventrankingid') > -1){
                // Update Event with new ID
                console.log(JSON.stringify(res));
                console.log(this._route.snapshot.params['eventId']);
                this._eventsService.updateRankingId(res['_id'],this._route.snapshot.params['eventId']).subscribe(
                    res => console.log(res),
                    err => console.log(err)
                )
                this._router.navigate(['eventsadmin']);
            }
        },
        err => {
            console.log(err);
        });
    }

    // Add new ranking line
    private addRanking(){
        if (!this.ranking){

            this.ranking = new Rankings();
                    const control = <FormArray>this.form.controls['details'];
            control.push(this.initRankingsDetail());
        }
        else{    
            let detail = new RankingsDetail();
            this.ranking.details.push(detail);
            const control = <FormArray>this.form.controls['details'];
            control.push(this.initRankingsDetail());
        }
    }

    // Delete ranking line
    private deleteRanking(position){
        const control = <FormArray>this.form.controls['details'];
        control.removeAt(position);
        //let index = this.ranking.details.indexOf(detail);
        this.ranking.details.splice(position, 1);
    }

}
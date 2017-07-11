import { Component, Input } from '@angular/core';
import { RankingsDetail } from '../model/rankingsdetail.model';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
    selector: 'rankingDetail',
    templateUrl: 'rankingdetails.template.html'
})
export class RankingDetailsComponent{

    @Input() detail: RankingsDetail;

}
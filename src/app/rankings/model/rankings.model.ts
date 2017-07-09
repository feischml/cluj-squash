import { RankingsDetail } from './rankingsdetail.model';

export class Rankings{

    _id: String;
    details: RankingsDetail[];

    constructor(){
        this._id = "";
        this.details = [new RankingsDetail()];
    }
}
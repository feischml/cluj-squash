export class Season{

    _id: String;
    name: String;
    beginDate: Date;
    endDate: Date;
    seasonTypeId: String;
    description: String;
    actualRankingId: String;
    rankingArchiveIds: String[];

    constructor(){
        this._id = "";
        this.name = "";
        this.beginDate = new Date();
        this.endDate = new Date();
        this.seasonTypeId = "";
        this.description = "";
        this.actualRankingId = "";
        this.rankingArchiveIds = [];
    }
}
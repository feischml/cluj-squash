export class Player{

    _id: String;
	bestlocalranking: Number;
    bestnationalranking: Number;
    bestnationalrankingdate: Date;
    achieventdescription: String;
    userId: String;

    constructor(){
        this._id = "";
        this.bestlocalranking = 0;
        this.bestnationalranking = 0;
        this.achieventdescription = "";
        this.userId = "";
    }
}
import { Location } from '../../common/models/location.model';

export class Club{
    _id: String;
    clubname: String;
    description: String;
    phone: String;
    webpage: String;
    maplocation: Location;

    constructor(){
        this._id = "";
        this.clubname = "";
        this.description = "";
        this.phone = "";
        this.webpage = "";
        this.maplocation = new Location();
    }

}
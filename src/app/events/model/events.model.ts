import { Location } from '../../common/models/location.model';

export class Events{

    _id: String;
    name: String;
    description: String;
    webpage: String;
    eventdate: Date;
    registeruntildate: Date;
    locationdescription: String;
    locationwebpage: String;
    maplocation: Location;

    constructor(){
        this._id = "";
        this.name = "";
        this.description = "";
        this.webpage = "";
        this.locationdescription = "";
        this.locationwebpage = "";
        this.maplocation = new Location();
    }

}
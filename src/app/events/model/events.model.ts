import { Location } from '../../common/models/location.model';
import { User } from '../../people/model/users.model';

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
    userIds: String[];
    userRegistered: Boolean;
    isNews: Boolean;
    participationAllowed: Boolean;

    constructor(){
        this._id = "";
        this.name = "";
        this.description = "";
        this.webpage = "";
        this.locationdescription = "";
        this.locationwebpage = "";
        this.maplocation = new Location();
        this.userIds = [];
        this.userRegistered = false;
        this.isNews = false;
        this.participationAllowed = false;
    }

}
export class Location{
    type: String;
    coordinates: Array<String>;

    constructor(){
        this.coordinates = [];
        this.type = "";
    }
}

export class Club{
    _id: String;
    clubname: String;
    description: String;
    phone: String;
    webpage: String;
    location: Location;

    constructor(){
        this._id = "";
        this.clubname = "";
        this.description = "";
        this.phone = "";
        this.webpage = "";
        this.location = new Location();
    }

}
export class Location{
    type: String;
    coordinates: Array<String>;
}

export class Club{
    _id: String;
    clubname: String;
    description: String;
    phone: String;
    webpage: String;
    location: Location;
}
export class User{
    
    _id: String;
    email: String;
    username: String;
    password: String;
    phone: String;
    fullname: String;
    birthdate: Date;
    roleIds: String[];
    // ToDo PhotoId

    constructor(){
        this._id = "";
        this.email = "";
        this.username = "";
        this.password = "";
        this.phone = "";
        this.fullname = "";
        this.roleIds = [];
    }
}
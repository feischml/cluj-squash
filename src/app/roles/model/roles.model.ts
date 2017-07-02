export class Role{
    _id: String;
    roletype: Number;
    name: String;
    description: String;
    admin: Boolean;
    basic: Boolean;

    constructor(){
        this._id = "";
        this.roletype = null;
        this.name = "";
        this.description = "";
        this.admin = false;
        this.basic = false;
    }
}
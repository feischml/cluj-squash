import { Headers } from '@angular/http';

export class AppConstants{
    
    private serverUrl: String;
    private headers = new Headers();
    private lclstorage = {
        CURR_USER: ""
    };
    
    constructor(){
        this.serverUrl = "http://localhost:3000";
        this.headers.append('Content-Type', 'application/json');
        this.lclstorage.CURR_USER = "CURR_USER";
    }

    // Get Headers for requests
    getHeaders(): Headers{
        return this.headers;
    }

    // Get the server URL
    getServerUrl(): String{
        return this.serverUrl;
    }

    getLclStorage(): Object{
        return this.lclstorage;
    }

}
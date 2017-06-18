import { Headers } from '@angular/http';

export class AppConstants{
    
    private serverUrl: String;
    private headers = new Headers();
    
    constructor(){
        this.serverUrl = "http://localhost:3000";
        this.headers.append('Content-Type', 'application/json');
    }

    // Get Headers for requests
    getHeaders(): Headers{
        return this.headers;
    }

    // Get the server URL
    getServerUrl(): String{
        return this.serverUrl;
    }

}
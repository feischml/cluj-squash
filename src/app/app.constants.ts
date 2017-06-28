import { Headers } from '@angular/http';

export class AppConstants{
    
    private serverUrl: String;
    private headers = new Headers();
    public static LOGGED_USER = "LOGGED_USER";
    public static LOGGED_ADMIN = "LOGGED_ADMIN";
    public static ROLES = { 
        // Player Role
        playerRoleType: 2,
        // Coach Role
        coachRoleType: 3,
        // Basic User Role
        basicRoleType: 1,
        // Admin Role
        adminRoleType: 99
    }
    
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
import { Headers } from '@angular/http';

export class AppConstants{
    public static serverUrl = "http://localhost:3000";
    
    private headers = new Headers();
    
    constructor(){
        this.headers.append('Content-Type', 'application/json');
    }

    getHeaders(): Headers{
        return this.headers;
    }
}
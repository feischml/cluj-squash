import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.template.html'
})
export class NavbarComponent {

    constructor(private _router: Router) { }

    // check if router is active -> if yes, set the active property of the current navbar component
    isRouteActive(url: string): boolean {
        return this._router.isActive(url, true);
    }

}
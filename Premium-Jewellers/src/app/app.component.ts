import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Premium-Jewellers';
  routeUrl;

  constructor(public _router: Router) {
    // subscribe to the router events in order to always get the current url
    this._router.events.subscribe(() => (this.routeUrl = this._router.url));
  }

  hasMatches(...values: string[]): boolean {
    let matchFound: boolean = false;

    // check for null or undefined first
    if (this.routeUrl) {
      for (let i = 0; i < values.length; i++) {
        if (this.routeUrl.indexOf(values[i]) > -1) {
          matchFound = true;
          break;
        }
      }
    }

    return matchFound;
  }
}

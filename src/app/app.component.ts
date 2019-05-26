import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { routeTransitions } from './route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    routeTransitions
  ]
})
export class AppComponent {
  title = 'Mad Scientist Personality Test';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
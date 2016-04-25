import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {MyBlueComponent} from './+my-blue';

@Component({
  moduleId: __moduleName,
  selector: 'my-app-app',
  providers: [ROUTER_PROVIDERS],
  templateUrl: 'my-app.html',
  styleUrls: ['my-app.css'],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
@RouteConfig([
  {path: '/my-blue/...', name: 'MyBlue', component: MyBlueComponent, useAsDefault: true}
])
export class MyAppApp {
  defaultMeaning: number = 42;

  meaningOfLife(meaning?: number) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}

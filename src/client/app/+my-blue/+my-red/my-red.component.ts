import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {MyGreenComponent} from './+my-green';
import {MyYellowComponent} from './+my-yellow';

@Component({
  moduleId: __moduleName,
  selector: 'my-red',
  templateUrl: 'my-red.component.html',
  styleUrls: ['my-red.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
  {path: '/my-green', name: 'MyGreen', component: MyGreenComponent, useAsDefault: true},
  {path: '/my-yellow', name: 'MyYellow', component: MyYellowComponent}
])
export class MyRedComponent implements OnInit {

  constructor() {}
  
  ngOnInit() {
  }

}

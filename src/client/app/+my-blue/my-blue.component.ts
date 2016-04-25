import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {MyRedComponent} from './+my-red';

@Component({
  moduleId: __moduleName,
  selector: 'my-blue',
  templateUrl: 'my-blue.component.html',
  styleUrls: ['my-blue.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
  {path: '/my-red/...', name: 'MyRed', component: MyRedComponent, useAsDefault: true}
])
export class MyBlueComponent implements OnInit {

  constructor() {}
  
  ngOnInit() {
  }

}

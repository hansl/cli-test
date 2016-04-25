import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

@Component({
  moduleId: __moduleName,
  selector: 'my-green',
  templateUrl: 'my-green.component.html',
  styleUrls: ['my-green.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class MyGreenComponent implements OnInit {

  constructor() {}
  
  ngOnInit() {
  }

}

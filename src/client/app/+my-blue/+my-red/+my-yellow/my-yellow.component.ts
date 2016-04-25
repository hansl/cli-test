import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

@Component({
  moduleId: __moduleName,
  selector: 'my-yellow',
  templateUrl: 'my-yellow.component.html',
  styleUrls: ['my-yellow.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class MyYellowComponent implements OnInit {

  constructor() {}
  
  ngOnInit() {
  }

}

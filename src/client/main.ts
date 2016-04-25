import {bootstrap} from 'angular2/platform/browser';
import {enableProdMode} from 'angular2/core';
import {environment} from './app/environment';
import {MyAppApp} from './app/my-app';

if (environment.production) {
  enableProdMode();
}

bootstrap(MyAppApp);

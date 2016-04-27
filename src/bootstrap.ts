import {provide} from "angular2/core";
import {bootstrap, ELEMENT_PROBE_PROVIDERS} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS, HashLocationStrategy, LocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

import {App} from './app/app';

const ENV_PROVIDERS = [];
ENV_PROVIDERS.push(ELEMENT_PROBE_PROVIDERS);


bootstrap(App, [...HTTP_PROVIDERS, ...ROUTER_PROVIDERS, ...ENV_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy })]);

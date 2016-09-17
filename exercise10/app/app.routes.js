"use strict";
var router_1 = require('@angular/router');
var wines_list_component_1 = require("./components/wines-list.component");
var contact_component_1 = require("./components/contact.component");
exports.routes = [
    { index: true, path: '/wines', name: "Wines", component: wines_list_component_1.WinesListComponent },
    { path: '/contact', name: "Contact", component: contact_component_1.ContactComponent }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map
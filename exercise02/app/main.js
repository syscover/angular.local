"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
//import { enableProdMode }           from '@angular/core';
//enableProdMode();
var app_module_1 = require('./app.module');
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(app_module_1.AppModule)
    .then(function (success) { return console.log("Bootstrap success"); })
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map
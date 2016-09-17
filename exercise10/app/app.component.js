"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var wines_list_component_1 = require("./components/wines-list.component");
var footer_component_1 = require("./components/footer.component");
var contact_component_1 = require("./components/contact.component");
var router_deprecated_1 = require("@angular/router-deprecated");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            //template: "any HTML",
            templateUrl: "app/views/app.html",
            // directivas son componentes u otros elementos que se van a utilizar en la vista en mode de etiquetas
            directives: [wines_list_component_1.WinesListComponent, footer_component_1.FooterComponent, router_deprecated_1.ROUTER_DIRECTIVES]
        }),
        router_deprecated_1.RouteConfig([
            { path: '/wines', name: "Wines", component: wines_list_component_1.WinesListComponent, useAsDefault: true },
            { path: '/contact', name: "Contact", component: contact_component_1.ContactComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
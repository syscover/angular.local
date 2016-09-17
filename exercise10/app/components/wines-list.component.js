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
var favorite_wine_component_1 = require("./favorite-wine.component");
var wine_service_1 = require("../services/wine.service");
var WinesListComponent = (function () {
    function WinesListComponent(_wineService) {
        this._wineService = _wineService;
        this.wines = _wineService.getWines();
    }
    WinesListComponent = __decorate([
        core_1.Component({
            selector: "wines-list",
            templateUrl: "app/views/wines-list.html",
            directives: [favorite_wine_component_1.FavoriteWineComponent],
            providers: [wine_service_1.WineService]
        }), 
        __metadata('design:paramtypes', [wine_service_1.WineService])
    ], WinesListComponent);
    return WinesListComponent;
}());
exports.WinesListComponent = WinesListComponent;
//# sourceMappingURL=wines-list.component.js.map
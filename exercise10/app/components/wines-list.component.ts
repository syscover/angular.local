import {Component} from "@angular/core";
import {Wine} from "../models/wine";
import {FavoriteWineComponent} from "./favorite-wine.component";
import {WineService} from "../services/wine.service";

@Component({
    selector: "wines-list",
    templateUrl: "app/views/wines-list.html",
    directives: [FavoriteWineComponent],
    providers: [WineService]
})

export class WinesListComponent{

    public wines:Array<Wine>;

    constructor(private _wineService:WineService){
        
        this.wines = _wineService.getWines();
    }
}
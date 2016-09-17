import {Component} from "@angular/core";
import {Wine} from "../models/wine";

@Component({
    selector: "favorite-wine",
    templateUrl: "app/views/favorite-wine.html"
})

export class FavoriteWineComponent{
    
    public favoriteWine:Wine;
    public viewData:boolean;
    
    constructor(){
        this.viewData = false;
        this.favoriteWine = new Wine(1, "Amancio", 1990, "Rivera del duero", "Es un vino muy refinado");
    }

    public setFavoriteWine(wine:Wine)
    {
        this.favoriteWine = wine;
    }

    public setVisibleFavoriteWine(value)
    {
        this.viewData = value;
    }
}
import {Injectable} from "@angular/core";
import {WINES} from "../models/mock.wines";

@Injectable()

export class WineService
{
    getWines()
    {
        return WINES;
    }
}
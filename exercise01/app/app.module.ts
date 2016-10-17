import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import {TransComponent} from "./trans.component";



@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent, TransComponent ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }
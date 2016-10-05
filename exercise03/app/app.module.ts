import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import './rxjs-extensions';

import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { routing } from './app.routing';

import { AppComponent }   from './app.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';
import { HeroSearchComponent } from './hero-search.component';


@NgModule({

    // imports, se importan módulos para tenter disponibles sus directivas para las vistas de los componentes (ngModel (FormsModule), ngFor(BrowserModule))
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,

        InMemoryWebApiModule.forRoot(InMemoryDataService),
        routing
    ],
    // se declaran componentes para tener sus directivas disponibles en el resto de componentes
    declarations: [
        AppComponent,
        DashboardComponent,
        HeroDetailComponent,
        HeroesComponent,
        HeroSearchComponent
    ],
    providers: [
        HeroService
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {
}
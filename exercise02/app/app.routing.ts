import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent} from './hero-detail.component';


const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'detail/:id',
        component: HeroDetailComponent
    }
];

/*
 * Ver:
 * http://victorroblesweb.es/2016/08/20/routing-angular-2-nuevo-router-rc5/
 *
 *  We'll export a routing constant initialized using the RouterModule.forRoot method applied to our array of routes. This method returns a configured router module that we'll add to our root NgModule, AppModule.
 *  We call the forRoot method because we're providing a configured router at the root of the application. The forRoot method gives us the Router service providers and directives needed for routing.
 */
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
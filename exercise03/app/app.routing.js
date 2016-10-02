"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./dashboard.component');
var heroes_component_1 = require('./heroes.component');
var hero_detail_component_1 = require('./hero-detail.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'heroes',
        component: heroes_component_1.HeroesComponent
    },
    {
        path: 'detail/:id',
        component: hero_detail_component_1.HeroDetailComponent
    }
];
/*
 * Ver:
 * http://victorroblesweb.es/2016/08/20/routing-angular-2-nuevo-router-rc5/
 *
 *  We'll export a routing constant initialized using the RouterModule.forRoot method applied to our array of routes. This method returns a configured router module that we'll add to our root NgModule, AppModule.
 *  We call the forRoot method because we're providing a configured router at the root of the application. The forRoot method gives us the Router service providers and directives needed for routing.
 */
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map
import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <!-- 
                The Angular Router provides a routerLinkActive directive we can use to add a class to the HTML navigation element, 
                ¿de donde viene esa directiva? viene implícita?
                
                Aparentemente todas las directivas de angular se importan por defecto
            -->
            <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
            <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    styleUrls: ['app.component.css']
})

export class AppComponent {
    title = 'Tour of Heroes';
}
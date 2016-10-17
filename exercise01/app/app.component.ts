import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App {{ getName() }} <trans [key]="hello"></trans></h1>'
})

export class AppComponent {

    name: string = 'hola mundo';

    getName(){
        console.log('XX');
        return this.name;
    }


}
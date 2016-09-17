import {Component} from "@angular/core";
import {WinesListComponent} from "./components/wines-list.component";
import {FooterComponent} from "./components/footer.component";
import {ContactComponent} from "./components/contact.component";
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "@angular/router-deprecated";

@Component({
    selector: "my-app",
    //template: "any HTML",
    templateUrl: "app/views/app.html",
    // directivas son componentes u otros elementos que se van a utilizar en la vista en mode de etiquetas
    directives: [WinesListComponent, FooterComponent, ROUTER_DIRECTIVES]

    // to set css custom component
    //styleUrls: ["../assets/css/style.css"]
})

@RouteConfig([
    {path: '/wines', name: "Wines", component: WinesListComponent, useAsDefault: true},
    {path: '/contact', name: "Contact", component: ContactComponent}
])

export class AppComponent{
}
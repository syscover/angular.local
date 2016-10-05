import { platformBrowserDynamic }   from '@angular/platform-browser-dynamic';
//import { enableProdMode }           from '@angular/core';

//enableProdMode();

import { AppModule } from './app.module';

const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule)
    .then(success => console.log(`Bootstrap success`))
    .catch(err => console.error(err));
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [ // ? Pueden ser componentes, declaraciones, directivas, pipes
    AppComponent,
  ],
  imports: [ // ! Sólo módulos
    BrowserModule,
    AppRoutingModule
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

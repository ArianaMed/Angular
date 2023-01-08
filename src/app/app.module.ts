import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componetes/encabezado/encabezado.component';
import { DatospersonalesComponent } from './componetes/datospersonales/datospersonales.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    DatospersonalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

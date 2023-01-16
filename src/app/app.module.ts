import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componetes/encabezado/encabezado.component';
import { DatospersonalesComponent } from './componetes/datospersonales/datospersonales.component';
import { EducacionComponent } from './componetes/educacion/educacion.component';
import { HabyconComponent } from './componetes/habycon/habycon.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    DatospersonalesComponent,
    EducacionComponent,
    HabyconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	  HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

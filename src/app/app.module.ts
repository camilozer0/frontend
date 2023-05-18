import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from './shared/material/material.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { VistaIComponent } from './components/shared/vista-i/vista-i.component';
import { PruebasComponent } from './components/pruebas/pruebas.component';
import { TabladComponent } from './components/shared/tablad/tablad.component';
import { CitasComponent } from './components/citas/citas.component';
import { AfiliadosComponent } from './components/afiliados/afiliados.component';
import { AgregarComponent } from './components/shared/agregar/agregar.component';
import { NuevapruebaComponent } from './components/forms/nuevaprueba/nuevaprueba.component';
import { EditarpruebaComponent } from './components/forms/editarprueba/editarprueba.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    HomeComponent,
    VistaIComponent,
    PruebasComponent,
    TabladComponent,
    CitasComponent,
    AfiliadosComponent,
    AgregarComponent,
    NuevapruebaComponent,
    EditarpruebaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

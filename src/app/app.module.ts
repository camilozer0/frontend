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
import { NuevapruebaComponent } from './components/forms/nuevaprueba/nuevaprueba.component';
import { EditarpruebaComponent } from './components/forms/editarprueba/editarprueba.component';
import { EditarcitaComponent } from './components/forms/editarcita/editarcita.component';
import { NuevacitaComponent } from './components/forms/nuevacita/nuevacita.component';
import { NuevoafiliadoComponent } from './components/forms/nuevoafiliado/nuevoafiliado.component';
import { EditarafiliadoComponent } from './components/forms/editarafiliado/editarafiliado.component';
import { ConfirmdComponent } from './components/shared/confirmd/confirmd.component';


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
    NuevapruebaComponent,
    EditarpruebaComponent,
    EditarcitaComponent,
    NuevacitaComponent,
    NuevoafiliadoComponent,
    EditarafiliadoComponent,
    ConfirmdComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  entryComponents: [ConfirmdComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

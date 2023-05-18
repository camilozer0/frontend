import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { DashboardComponent } from './dashboard.component';
import { PruebasComponent } from 'src/app/components/pruebas/pruebas.component';
import { CitasComponent } from '../citas/citas.component';
import { AfiliadosComponent } from '../afiliados/afiliados.component';
import { NuevapruebaComponent } from '../forms/nuevaprueba/nuevaprueba.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'citas', component: CitasComponent },
      { path: 'pruebas', component: PruebasComponent },
      { path: 'afiliados', component: AfiliadosComponent },
      { path: 'pruebas/nueva', component: NuevapruebaComponent }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

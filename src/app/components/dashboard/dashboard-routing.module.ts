import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { DashboardComponent } from './dashboard.component';
import { PruebasComponent } from 'src/app/components/pruebas/pruebas.component';
import { CitasComponent } from '../citas/citas.component';
import { AfiliadosComponent } from '../afiliados/afiliados.component';
import { NuevapruebaComponent } from '../forms/nuevaprueba/nuevaprueba.component';
import { NuevoafiliadoComponent } from '../forms/nuevoafiliado/nuevoafiliado.component';
import { NuevacitaComponent } from '../forms/nuevacita/nuevacita.component';
import { EditarcitaComponent } from '../forms/editarcita/editarcita.component';
import { EditarafiliadoComponent } from '../forms/editarafiliado/editarafiliado.component';
import { EditarpruebaComponent } from '../forms/editarprueba/editarprueba.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'citas', component: CitasComponent },
      { path: 'citas/nueva', component: NuevacitaComponent },
      { path: 'citas/editar', component: EditarcitaComponent },
      { path: 'pruebas', component: PruebasComponent },
      { path: 'pruebas/nueva', component: NuevapruebaComponent },
      { path: 'pruebas/editar', component: EditarpruebaComponent },
      { path: 'afiliados', component: AfiliadosComponent },
      { path: 'afiliados/nuevo', component: NuevoafiliadoComponent },
      { path: 'afiliados/editar/:id', component: EditarafiliadoComponent },
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

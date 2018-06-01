import { NgModule } from '@angular/core';
import { AgregarSocioComponent } from './componentes/agregar-socio/agregar-socio.component';
import { GetUsersComponent } from './componentes/get-users/get-users.component';
import { SocioDetalleComponent } from './componentes/socio-detalle/socio-detalle.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';
import { AgregarCuentaComponent } from './componentes/agregar-cuenta/agregar-cuenta.component';
import { AgregarMovimientoComponent } from './componentes/agregar-movimiento/agregar-movimiento.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{path:'socios/:id', component: SocioDetalleComponent},
	{path:'socios', component: GetUsersComponent},
	{path:'agregarsocio', component: AgregarSocioComponent},
	{path:'agregarcuenta', component: AgregarCuentaComponent},
	{path:'agregarmovimiento', component: AgregarMovimientoComponent},
	{path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

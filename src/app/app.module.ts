import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule }    from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AgregarSocioComponent } from './componentes/agregar-socio/agregar-socio.component';
import { GetUsersComponent } from './componentes/get-users/get-users.component';
import {HttpService} from './servicios/http/http.service';
import {SocioService} from './servicios/socio/socio.service';
import {CuentaService} from './servicios/cuenta/cuenta.service';
import {MovimientoService} from './servicios/movimiento/movimiento.service';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { SocioDetalleComponent } from './componentes/socio-detalle/socio-detalle.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';
import { AgregarCuentaComponent } from './componentes/agregar-cuenta/agregar-cuenta.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatFormFieldModule, 
  MatAutocompleteModule,
  MatOptionModule,
MatInputModule,
MatSelectModule,
MatButtonModule} from '@angular/material';
import { AgregarMovimientoComponent } from './componentes/agregar-movimiento/agregar-movimiento.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregarSocioComponent,
    GetUsersComponent,
    NavBarComponent,
    SocioDetalleComponent,
    NotFoundComponent,
    AgregarCuentaComponent,
    AgregarMovimientoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    MatFormFieldModule, 
    MatOptionModule,
    MatAutocompleteModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [HttpService,SocioService,CuentaService,MovimientoService],
  bootstrap: [AppComponent],
})
export class AppModule { }

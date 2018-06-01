import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import  { Socio } from '../../clases/socio';
import  { Cuenta } from '../../clases/cuenta';
import {SocioService} from '../../servicios/socio/socio.service';
import {CuentaService} from '../../servicios/cuenta/cuenta.service';

import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
@Component({
  selector: 'app-agregar-cuenta',
  templateUrl: './agregar-cuenta.component.html',
  styleUrls: ['./agregar-cuenta.component.scss']
})
export class AgregarCuentaComponent implements OnInit {
	  //socioCtrl: FormControl;
	  filteredSocios: Observable<Socio[]>;
myControl = new FormControl();
	socios: Socio[] = [];
	cuenta:Cuenta={
		socio:null,
	};
	selected :string;
	socio:string;


  constructor(private cuentaService: CuentaService,private socioService: SocioService) { 

/*
    this.socioCtrl = new FormControl();
    this.filteredSocios = this.socioCtrl.valueChanges
      .pipe(

        map(socio => socio ? this.filtersocios(socio) : this.socios.slice())
      );*/
  }
    filtersocios(name: string) {
    return this.socios.filter(socio =>
      socio.nombre.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

   ngOnInit() {
		this.socioService.getSocio().subscribe(data=>{
			this.socios = data;
        });
    this.filteredSocios = this.myControl.valueChanges
      .pipe(
        startWith<string | Socio>(''),
        map(value => typeof value === 'string' ? value : value.nombre),
        map(nombre => nombre ? this.filter(nombre) : this.socios.slice())
      );
  }

	  filter(name: string): Socio[] {
    return this.socios.filter(option =>
      option.nombre.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  displayFn(socio?: Socio): string | undefined {
    return socio ? socio.nombre+' '+ socio.apellido : undefined;
  }
  addCuenta(cuenta:Cuenta){
  	console.log(this.myControl.value.id);
  	cuenta.socio = this.myControl.value.id;
  	console.log(cuenta);
  	this.cuentaService.addCuenta(cuenta);
  }
}

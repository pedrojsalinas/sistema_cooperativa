import { Component, OnInit } from '@angular/core';
import { Movimiento} from '../../clases/movimiento';
import {FormControl} from '@angular/forms';
import  { Socio } from '../../clases/socio';
import  { Cuenta } from '../../clases/cuenta';
import {SocioService} from '../../servicios/socio/socio.service';
import {MovimientoService} from '../../servicios/movimiento/movimiento.service';
import {CuentaService} from '../../servicios/cuenta/cuenta.service';

import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-agregar-movimiento',
  templateUrl: './agregar-movimiento.component.html',
  styleUrls: ['./agregar-movimiento.component.scss']
})
export class AgregarMovimientoComponent implements OnInit {
		  filteredSocios: Observable<Socio[]>;
myControl = new FormControl();
	socios: Socio[] = [];
	cuentas:any;
	selected :string;
	socio:any;
	cuenta:null;

  constructor(private socioService: SocioService,
  	private movimientoService: MovimientoService,
  	private cuentaService: CuentaService) { }

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
	addMovimiento(movimiento:Movimiento){
	  	this.cuentaService.getCuentaSocio(this.myControl.value.id).subscribe(data=>{
	  		this.cuentas = data;
	  	})
	  		movimiento.cuenta = this.myControl.value;
  	console.log(this.myControl.value);
  	/*movimiento.socio = this.myControl.value.id;
  	console.log(movimiento);
  	this.movimientoService.addMovimiento(movimiento);*/
  }

  dataChanged(e){

      if (e.id !== "" && this.socio.id !== null) {
        // code...
            this.cuentaService.getCuentaSocio(e.id).subscribe(data=>{
            this.cuentas = data;
          })
      }else{
        console.log('undefined')
      }
    }
}


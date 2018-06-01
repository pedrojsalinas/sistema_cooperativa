import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from  '@angular/common/http';
import {Observable} from  'rxjs/Observable';
import {Cuenta} from '../../clases/cuenta';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable()
export class CuentaService {
	readonly ROOT_URL='http://127.0.0.1:8000/api/cuentas';
	readonly ROOT_URL_SOCIO='http://127.0.0.1:8000/api/cuentas/socio';

	  cuenta:Cuenta;
	    httpOptions= {headers: new HttpHeaders({
	    'Content-Type':  'application/json',
	    'Authorization': 'my-auth-token'
	  })}

  constructor(private http: HttpClient) { }
	addCuenta(cuenta:Cuenta){
		this.http.post<Cuenta>(this.ROOT_URL,cuenta,this.httpOptions).subscribe(respose=>{
			alert('Cuenta creada');
		},error=>console.log(error)
		);
		}
	getCuentaSocio(id:number){
		return this.http.get<Cuenta>(this.ROOT_URL_SOCIO+'/'+id+'/');
	}
}

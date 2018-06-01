import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from  '@angular/common/http';
import {Observable} from  'rxjs/Observable';
import {Movimiento} from '../../clases/movimiento';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class MovimientoService {

	readonly ROOT_URL='http://127.0.0.1:8000/api/movimientos';

	  movimiento:Movimiento;

	    httpOptions= {headers: new HttpHeaders({
	    'Content-Type':  'application/json',
	    'Authorization': 'my-auth-token'
	  })}
  constructor(private http: HttpClient) { }
  	addMovimiento(movimiento:Movimiento){
		this.http.post<Movimiento>(this.ROOT_URL,movimiento,this.httpOptions).subscribe(respose=>{
			alert('Movimiento creado.');
		},error=>console.log(error)
		);
		}

}

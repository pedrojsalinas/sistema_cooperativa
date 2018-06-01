import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from  '@angular/common/http';
import {Observable} from  'rxjs/Observable';
import {Socio} from '../../clases/socio';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable()
export class SocioService {
	readonly ROOT_URL='http://127.0.0.1:8000/api/socios';

  socio:Socio;
    httpOptions= {headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })}
  constructor(private http: HttpClient) { }

	getSocio(){
		return this.http.get<Socio[]>(this.ROOT_URL); 
	}

	getSocios(id:number){
		return this.http.get<Socio>(this.ROOT_URL+'/'+id+'/');
	}
	addSocio(socio:Socio){
		this.http.post<Socio>(this.ROOT_URL,socio,this.httpOptions).subscribe(respose=>{
			alert('Socio creado');
		},error=>console.log(error)
		);
		}
	

  deleteSocio(id:number){
  	console.log(id);
  	this.http.delete(this.ROOT_URL+'/'+id+'/',this.httpOptions).subscribe(res=>{
  		alert('Usuario Eliminado')
  	},error=>console.log(error))
  }

	updateSocio(socio:Socio){
		let id = socio.id;
		this.http.put<Socio>(this.ROOT_URL+'/'+id+'/',socio,this.httpOptions).subscribe(respose=>{
			alert('Socio actualizado');
		},error=>console.log(error)
		);
		}
}

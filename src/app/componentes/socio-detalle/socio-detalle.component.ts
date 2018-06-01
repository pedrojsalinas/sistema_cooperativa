import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../servicios/http/http.service';
import {Socio} from '../../clases/socio';

@Component({
  selector: 'app-socio-detalle',
  templateUrl: './socio-detalle.component.html',
  styleUrls: ['./socio-detalle.component.scss']
})
export class SocioDetalleComponent implements OnInit {

  constructor(private route: ActivatedRoute,private service: HttpService) { }
  nombre: string;
  apellido: string;
  id:number;
  socio:Socio;

  ngOnInit() {
  	let id;
  	this.route.paramMap.subscribe(data=>{
  		id = +data.get('id');
	  	this.service.getSocios(id).subscribe(data=>{
  		this.id=data.id;
  		this.nombre=data.nombre;
  		this.apellido=data.apellido;
	  	},error=>alert('Error'));
  	});

	}
	elimininarSocio(){
		this.service.deleteSocio(this.id);
	}
	updateSocio(socio:Socio){
		socio.id=this.id;
		socio.nombre=this.nombre;
		socio.apellido=this.apellido;
		this.service.updateSocio(socio);

	}

}

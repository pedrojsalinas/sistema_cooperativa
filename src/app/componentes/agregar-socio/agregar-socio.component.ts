import { Component, OnInit } from '@angular/core';
import {Socio} from '../../clases/socio';
import {SocioService} from '../../servicios/socio/socio.service';

@Component({
  selector: 'app-agregar-socio',
  templateUrl: './agregar-socio.component.html',
  styleUrls: ['./agregar-socio.component.scss']
})
export class AgregarSocioComponent implements OnInit {

socio: Socio;
  constructor(private http: SocioService) { }

  ngOnInit() {
  }
	/*addUser(socio:Socio) {
		console.log(socio.nombre);
   if (this.mysqlService.addMysqlUserDatas(socio.nombre, socio.apellido)) {
      alert('Data Inserted Successfully');
    }
}*/
addSocio(socio:Socio){
  console.log(socio);
  this.http.addSocio(socio);

}

}

import { Component, OnInit } from '@angular/core';
import { Socio } from '../../clases/socio';
import {SocioService} from '../../servicios/socio/socio.service';
import {HttpClient} from  '@angular/common/http';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { Subject } from 'rxjs';
import 'rxjs/add/operator/map';

@Component({
  moduleId: module.id,
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.scss']
})
export class GetUsersComponent implements OnInit {
  dtOptions: any = {};


  socios: Socio[] = [];
  dtTrigger: Subject<any> = new Subject();
  fecha=new Date();

  constructor(private http: SocioService) { 
    //this.getPosts();
  }
  //ngOnInit(){}
  getPosts(){
    //this.socios = this.http.getSocio();
  }


  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
            // Declare the use of the extension in the dom parameter
      dom: 'Bfrtip',
      // Configure the buttons
      buttons: [
        'colvis',
        'copy',
        'print',
        'csv'
      ]

    };
        this.http.getSocio().subscribe(data=>{
           this.socios = data;
           this.dtTrigger.next()
        });
      }



  private extractData(res: Response) {
    const body = res.json();
    return body.data || {};
  }
}
import { Component, OnInit } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'app-preguntas-seguridad',
  templateUrl: './preguntas-seguridad.component.html',
  styleUrls: ['./preguntas-seguridad.component.css']
})
export class PreguntasSeguridadComponent implements OnInit {

  clientes:any;
  poliza:any;
  ramos:any;
  per:any;
  nom:any;
  claveCliente:any;

  constructor (db:AngularFireDatabase,a:AngularFireDatabase){
   /* db.object('clientes')
    .valueChanges()
    .subscribe(claveCliente=>{
      this.claveCliente=claveCliente;
      console.log(this.claveCliente);
    });*/
    db.object('/clientes/RISW8822119S0/datosCliente')
      .valueChanges()
      .subscribe(clientes=> {
        this.clientes= clientes;
        console.log(this.clientes);
      });
    db.object('/clientes/RISW8822119S0/datosCliente/nombreCompleto')
      .valueChanges()
      .subscribe(nom=> {
        this.nom= nom;
        console.log(this.nom);
      });
      a.object('/clientes/RISW8822119S0/datosPoliza')
      .valueChanges()
      .subscribe(poliza=> {
        this.poliza= poliza;
        console.log(this.poliza);
      });
      db.object('/ramos')
      .valueChanges()
      .subscribe(ramos=> {
        this.ramos= ramos;
        console.log(this.ramos);
      });
      db.object('/perfiles')
      .valueChanges()
      .subscribe(per=> {
        this.per= per;
        console.log(this.per);
      });
    }
    

  isVisible = false;

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
  size: NzButtonSize = 'large';

  ngOnInit() {
    // Called after the constructor and called  after the first ngOnChanges() 
 }
}


export class NzDemoBreadcrumbSeparatorComponent {}

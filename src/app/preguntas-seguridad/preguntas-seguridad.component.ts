import { Component, OnInit } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router, ActivatedRoute, ParamMap, Params  } from '@angular/router';

@Component({
  selector: 'app-preguntas-seguridad',
  templateUrl: './preguntas-seguridad.component.html',
  styleUrls: ['./preguntas-seguridad.component.css']
})
export class PreguntasSeguridadComponent implements OnInit {
  clientes:any;
  poliza: any;
  poliza2: any;
  ramos: any;
  perfiles: any;
  nombreC: any;
  claveCliente: string;
  roles:any;

  constructor(private db:AngularFireDatabase, private router: Router, private ActivatedRoute: ActivatedRoute) {

    
    

    

  }
//ruta dinamica

ngOnInit (): void  {
  /* this.claveCliente = this.route.snapshot.paramMap.get('claveCliente'); */  
  this.ActivatedRoute.paramMap.subscribe((parametros: ParamMap) => {
    this.claveCliente = String(parametros.get("claveCliente"));
    console.log("clave cliente",this.claveCliente)
    this.obtenerDatos(this.db, this.claveCliente);
    } )
    
  }

  obtenerDatos(db, claveCliente): void{
     db.object(`/clientes/${claveCliente}/datosCliente`)
    .valueChanges()
    .subscribe(clientes=> {
    this.clientes= clientes;
    console.log(this.clientes);
  });


    db.object(`/clientes/${claveCliente}/datosPoliza`)
    .valueChanges()
    .subscribe(poliza=> {
    this.poliza= poliza;
    console.log(this.poliza);
  });
    db.object(`/clientes/${claveCliente}/datosCliente/nombreCompleto`)
    .valueChanges()
    .subscribe(nombreC=> {
    this.nombreC= nombreC;
    console.log(this.nombreC);
  });

    db.object('/ramos')
    .valueChanges()
    .subscribe(ramos=> {
    this.ramos= ramos;
    console.log(this.ramos);
  });

   db.object('/perfiles')
    .valueChanges()
    .subscribe(perfiles=> {
    this.perfiles= perfiles;
    console.log(this.perfiles);
  });
    db.object(`/roles`)
    .valueChanges()
    .subscribe(roles=> {
    this.roles= roles;
    console.log(this.roles);
  });

  }


//Ng Zorro
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

}

export class NzDemoBreadcrumbSeparatorComponent {}
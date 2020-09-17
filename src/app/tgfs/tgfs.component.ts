import { Component, OnInit } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-tgfs',
  templateUrl: './tgfs.component.html',
  styleUrls: ['./tgfs.component.css']
})
export class TgfsComponent implements OnInit {

  clientes:any;
  poliza:any;
  ramos:any;
  per:any;
  constructor (db:AngularFireDatabase,a:AngularFireDatabase){
    db.object('/clientes/TGFS8822339S0/datosCliente')
      .valueChanges()
      .subscribe(clientes=> {
        this.clientes= clientes;
        console.log(this.clientes);
      });
      a.object('/clientes/TGFS8822339S0/datosPoliza')
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

}


export class NzDemoBreadcrumbSeparatorComponent {}
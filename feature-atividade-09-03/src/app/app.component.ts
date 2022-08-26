import * as $ from 'jquery';
import * as M from 'materialize-css';


import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'controle-de-notas-mentais';
//declaração das variáveis

notas:any[]=[];

/* nomeDaNota: String = '';
intervenienteDaNota : String = '';
escopoDaNota: String = '';
vencimentoDaNota : String = '';
descricaoDaNota: String = ''; */


  transferirNota($event:any){
    console.log($event);
/*     this.nomeDaNota = $event.nomeDaNota;
    this.intervenienteDaNota =$event.intervenienteDaNota;
    this.escopoDaNota = $event.escopoDaNota;
    this.vencimentoDaNota = $event.vencimentoDaNota;
    this.descricaoDaNota = $event.descricaoDaNota;*/
  this.notas.push($event);
  }



}

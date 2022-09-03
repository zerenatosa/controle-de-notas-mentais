import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exibicao-nota-mental',
  templateUrl: './exibicao-nota-mental.component.html',
  styleUrls: ['./exibicao-nota-mental.component.css']
})
export class ExibicaoNotaMentalComponent implements OnInit {


 @Input() conteudoDaNotas: any[] = [];
//declaração das variáveis
/* nomeDaNota: String = '';
intervenienteDaNota : String = '';
escopoDaNota: String = '';
vencimentoDaNota : Date = new Date();

descricaoDaNota: String = '';
dataAux2 : Date = this.vencimentoDaNota;
dataAux = new Date();
diasAberto : number =  (this.dataAux.getDate() - this.vencimentoDaNota.getDate()) */

//evento output
@Output() aoGravarNovaNota = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConteudoNota } from '../models/conteudoNota';
import { ServiceNotasMentaisService } from '../services/service-notas-mentais.service';
import {HttpClient} from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-exibicao-nota-mental',
  templateUrl: './exibicao-nota-mental.component.html',
  styleUrls: ['./exibicao-nota-mental.component.css']
})
export class ExibicaoNotaMentalComponent implements OnInit {

  private url = 'http://localhost:3000/conteudoNotas';
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


  constructor(private service : ServiceNotasMentaisService, private httpClient: HttpClient) { }

  ngOnInit(): void {
    /* this.conteudoDaNotas = this.service.conteudoNotas; */
    this.service.todas().subscribe((conteudoDaNotas: ConteudoNota[]) =>{
      console.table(conteudoDaNotas);
      this.conteudoDaNotas = conteudoDaNotas;
    }
    )
  /* this.conteudoDaNotas = this.service.conteudoNotas;
  this.service.todas11();
  this.conteudoDaNotas = this.service.todas11(); */

  }


    deletarNota(userId: string){
      this.httpClient.delete('http://localhost:3000/conteudoNotas/' + userId).subscribe((res:any)=> {
        alert('Registro deletado');
        this.ngOnInit();

      })
      this.ngOnInit();
   }

   concluirNota(userId: string, vencimentoDaNota:any){
    const d = new Date('2022/01/01');
    const d2 = d.toString();
    const date1 = new Date();
    const date2 = new Date(vencimentoDaNota);
    var diferenca = Math.abs(date1.getTime() - date2.getTime()); //diferença em milésimos e positivo
    var dia = 1000*60*60*24; // milésimos de segundo correspondente a um dia
    var total = Math.round(diferenca/dia); //valor total de dias arredondado


    /* alert(d2) */
    this.httpClient.patch('http://localhost:3000/conteudoNotas/' + userId,{"situacaoNota": "concluida", "dataConclusao":date1, "diasAberto":total}).subscribe((res:any)=> {
      /* alert('nota concluída!'); */
      alert('sua nota mental foi concluída em ' + total + ' dias')
      this.ngOnInit();

    })
    this.ngOnInit();
 }


}

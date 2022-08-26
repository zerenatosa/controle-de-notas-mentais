import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-nota-mental',
  templateUrl: './nova-nota-mental.component.html',
  styleUrls: ['./nova-nota-mental.component.css']
})
export class NovaNotaMentalComponent implements OnInit {

//declaração das variáveis
nomeDaNota: String = '';
intervenienteDaNota : String = '';
escopoDaNota: String = '';
vencimentoDaNota : String = '';
descricaoDaNota: String = '';

//evento output
@Output() aoGravarNovaNota = new EventEmitter<any>();

dadoParaFilhoViaRota : string ='';
dadoParaNomeDaNota: string ='';
  constructor(private route: Router) { }

  gravarNovaNota(){
    /* console.log('solicitado gravar' + this.nomeDaNota);
    alert(this.nomeDaNota);
    alert(this.intervenienteDaNota);
    alert(this.escopoDaNota);
    alert(this.vencimentoDaNota);
    alert(this.descricaoDaNota); */
    alert('Nota mental incluída!!')

    /* const valorNota = {nomeDaNota:this.nomeDaNota, intervenienteDaNota:this.intervenienteDaNota, escopoDaNota: this.escopoDaNota, vencimentoDaNota: this.vencimentoDaNota, descricaoDaNota: this.descricaoDaNota};
    this.aoGravarNovaNota.emit(this.nomeDaNota); */
    this.limparCampos();
    this.route.navigate(['exibicao-nota-mental'],{queryParams:{data:this.nomeDaNota}})
  }


  mensagemParaFilho(){
    this.route.navigate(['exibicao-nota-mental'], {queryParams:{data:this.dadoParaFilhoViaRota}})
    this.dadoParaNomeDaNota = this.dadoParaFilhoViaRota;
  }





limparCampos(){
  this.nomeDaNota="";
  this.intervenienteDaNota="";
  this.escopoDaNota="";
  this.vencimentoDaNota="";
  this.descricaoDaNota="";
}

  ngOnInit(): void {
  }

}

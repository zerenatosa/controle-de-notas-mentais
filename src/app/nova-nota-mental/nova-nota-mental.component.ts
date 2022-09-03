import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nova-nota-mental',
  templateUrl: './nova-nota-mental.component.html',
  styleUrls: ['./nova-nota-mental.component.css']
})
export class NovaNotaMentalComponent implements OnInit {

@Output() aoTransferir = new EventEmitter<any>();

  nomeDaNota : string = '';
  intervenienteDaNota : string = '';
  escopoDaNota : string = '';
  vencimentoDaNota : string = '';
  descricaoDaNota : string = '';

  constructor() { }

  ngOnInit(): void {

  }

  gravarNovaNota(){

  }

  transferir(){
    console.log('solicitado transferencia');
    console.log(this.nomeDaNota);
    const conteudoNota = {nomeDaNota: this.nomeDaNota,
                          intervenienteDaNota: this.intervenienteDaNota,
                          escopoDaNota: this.escopoDaNota,
                          vencimentoDaNota: this.vencimentoDaNota,
                          descricaoDaNota: this.descricaoDaNota};
    this.aoTransferir.emit(conteudoNota);

//WEB STORAGE
   let json = JSON.stringify(this.nomeDaNota);
   localStorage['conteudoNotaStorage'] = json;
   json = JSON.parse(localStorage.getItem('conteudoNotaStorage')!);
   alert('O valor da nota armazenado com web storage é ' + json);


    this.limparCampos();
  }

  limparCampos(){
    this.nomeDaNota="";
    this.intervenienteDaNota="";
    this.escopoDaNota="";
    this.vencimentoDaNota="";
    this.descricaoDaNota="";
  }

}

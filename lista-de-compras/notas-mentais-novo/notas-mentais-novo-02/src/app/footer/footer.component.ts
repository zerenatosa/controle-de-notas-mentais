import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  year : number;
  direitos = "Todos os direitos reservados";

  sobreEMailNotaMental = 'zerenatosa@gmail.com';
  sobreAutorNotaMental = "José Renato Santiago Arantes";
  sobreTwiterNotaMental = "@zerenatosa";
  sobreAnoLancamentoNotaMental = "2022";
  sobreUrlGit = "https://github.com/zerenatosa/controle-de-notas-mentais";

  constructor() {
    this.year = new Date().getFullYear() ;
  }

  ngOnInit(): void {
  }

}

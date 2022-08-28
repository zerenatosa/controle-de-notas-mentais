import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as M from 'materialize-css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  @ViewChild('mobile') sidNave?: ElementRef;
  endereco  = '';


  ngAfterViewInit():void{
    M.Sidenav.init(this.sidNave?.nativeElement);
  }

  ngOnInit(): void {

    alert("No menu principal use a opção conteúdo-desta-versão para explorar as implementações desta aplicação");
  }

}

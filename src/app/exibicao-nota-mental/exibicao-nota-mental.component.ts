import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-exibicao-nota-mental',
  templateUrl: './exibicao-nota-mental.component.html',
  styleUrls: ['./exibicao-nota-mental.component.css']
})
export class ExibicaoNotaMentalComponent implements OnInit {

  transferencias: any[] = [];


  @Input() notas:any[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}

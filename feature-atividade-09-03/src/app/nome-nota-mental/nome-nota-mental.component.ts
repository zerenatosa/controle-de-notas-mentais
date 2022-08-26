import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nome-nota-mental',
  templateUrl: './nome-nota-mental.component.html',
  styleUrls: ['./nome-nota-mental.component.css']
})
export class NomeNotaMentalComponent implements OnInit {

@Input() nomeDaNotaMental: string = '';


  constructor() { }

  ngOnInit(): void {
  }

}

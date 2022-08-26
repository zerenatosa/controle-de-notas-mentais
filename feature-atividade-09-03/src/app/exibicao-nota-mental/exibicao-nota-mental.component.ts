import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exibicao-nota-mental',
  templateUrl: './exibicao-nota-mental.component.html',
  styleUrls: ['./exibicao-nota-mental.component.css']
})
export class ExibicaoNotaMentalComponent implements OnInit {

  transferencias: any[] = [];


  @Input() notas:any[]=[];

  dado01:string = '';
  @Input() dado02:string ='';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params:any) =>{
      console.log(params)
      this.dado01 = params.data;
    })

  }

}

import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild, } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, AfterViewInit {
  menu1 = "Suas notas mentais";
  menu2 = "Sua lista de notas mentais";
  menu3 = "Inclua novas notas";
  @ViewChild('mobile') sideNav?: ElementRef;

    constructor() {}

    ngOnInit(): void {}

    ngAfterViewInit(): void {
      M.Sidenav.init(this.sideNav?.nativeElement);
    }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExibicaoNotaMentalComponent } from './exibicao-nota-mental/exibicao-nota-mental.component';
import { SobreNotaMentalComponent } from './sobre-nota-mental/sobre-nota-mental.component';
import { TesteiraNotaMentalComponent } from './testeira-nota-mental/testeira-nota-mental.component';
/* import { NotaNotaMenalComponent } from './nota-nota-menal/nota-nota-menal.component';
import { NotaNotaMentalComponent } from './nota-nota-mental/nota-nota-mental.component'; */
import { NovaNotaMentalComponent } from './nova-nota-mental/nova-nota-mental.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ExibicaoNotaMentalComponent,
    SobreNotaMentalComponent,
    TesteiraNotaMentalComponent,
/*     NotaNotaMenalComponent,
    NotaNotaMentalComponent, */
    NovaNotaMentalComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

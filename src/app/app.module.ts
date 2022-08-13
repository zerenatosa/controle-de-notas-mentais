import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExibicaoNotaMentalComponent } from './exibicao-nota-mental/exibicao-nota-mental.component';
import { SobreNotaMentalComponent } from './sobre-nota-mental/sobre-nota-mental.component';

@NgModule({
  declarations: [
    AppComponent,
    ExibicaoNotaMentalComponent,
    SobreNotaMentalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

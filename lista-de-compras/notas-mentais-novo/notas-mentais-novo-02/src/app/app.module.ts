import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { LandPageComponent } from './land-page/land-page.component';
import { MenuComponent } from './menu/menu.component';
import { ModalComponent } from './modal/modal.component';
import { NewListComponent } from './new-list/new-list.component';
import { NotauthorizedComponent } from './notauthorized/notauthorized.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductPanelComponent } from './product-panel/product-panel.component';
import { RegisterProductComponent } from './register-product/register-product.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ConteudoDestaVersaoComponent } from './conteudo-desta-versao/conteudo-desta-versao.component';
/* import { NgxMaskModule } from 'ngx-mask'; */



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LandPageComponent,
    MenuComponent,
    ModalComponent,
    NewListComponent,
    NotauthorizedComponent,
    ProductDetailComponent,
    ProductPanelComponent,
    RegisterProductComponent,
    ShoppingListComponent,
    LoginComponent,
    ConteudoDestaVersaoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
/*     NgxMaskModule.forRoot() */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

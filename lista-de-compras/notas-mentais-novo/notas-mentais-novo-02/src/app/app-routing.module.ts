import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConteudoDestaVersaoComponent } from './conteudo-desta-versao/conteudo-desta-versao.component';
import { LandPageComponent } from './land-page/land-page.component';
import { LoginComponent } from './login/login.component';
import { NewListComponent } from './new-list/new-list.component';
import { NotauthorizedComponent } from './notauthorized/notauthorized.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RegisterProductComponent } from './register-product/register-product.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
  { path: '', component: LandPageComponent },
  { path: 'cadastrar', component: RegisterProductComponent },
  { path: 'lista', component: ShoppingListComponent },
  { path: 'lista/detalhes/:id', component: ProductDetailComponent },
  { path: 'nova-lista', component: NewListComponent },
  { path: 'nao-autorizado', component: NotauthorizedComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: ConteudoDestaVersaoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
/*   import { LoginComponent } from './login/login.component'; */
exports: [RouterModule],
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StorePageComponent } from './page/store-page/store-page.component';
import { CartPageComponent } from './page/cart-page/cart-page.component';
import { ItemPageComponent } from './page/item-page/item-page.component';
import { DetailTransactionPageComponent } from './page/detail-transaction-page/detail-transaction-page.component';
import { ListTransactionPageComponent } from './page/list-transaction-page/list-transaction-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/store', pathMatch: 'full' },
  { path: 'store', component: StorePageComponent },
  { path: 'cart', component: CartPageComponent },
  { path: 'item', component: ItemPageComponent },
  { path: 'listTransaction', component: ListTransactionPageComponent },
  { path: 'detailTransaction', component: DetailTransactionPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StorePageComponent } from './page/store-page/store-page.component';
import { ItemPageComponent } from './page/item-page/item-page.component';
import { CartPageComponent } from './page/cart-page/cart-page.component';
import { ListTransactionPageComponent } from './page/list-transaction-page/list-transaction-page.component';
import { DetailTransactionPageComponent } from './page/detail-transaction-page/detail-transaction-page.component';

@NgModule({
  declarations: [
    AppComponent,
    StorePageComponent,
    ItemPageComponent,
    CartPageComponent,
    ListTransactionPageComponent,
    DetailTransactionPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { HighLightDirective } from './high-light.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartViewComponent } from './cart-view/cart-view.component';
import { HomeComponent } from './home/home.component';
import { ItemListComponent } from './item-list/item-list.component';
import { CartBadgeComponent } from './cart-badge/cart-badge.component';


const routes = [
  { path: '', component: HomeComponent },
  { path: 'items', component: ItemListComponent },
  { path: 'cart', component: CartViewComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    HighLightDirective,
    CartViewComponent,
    HomeComponent,
    ItemListComponent,
    CartBadgeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

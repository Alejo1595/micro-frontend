import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [
    ProductsComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export default class ProductsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/product/product.component';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [CartComponent, ProductComponent],
  imports: [CommonModule, CartRoutingModule, MaterialModule],
})
export class CartModule {}

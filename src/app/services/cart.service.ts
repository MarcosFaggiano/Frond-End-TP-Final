import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartProducts: any[] = [];

  constructor() {}

  addProductToCart(product: any) {
    this.cartProducts = [...this.cartProducts, product];
    console.log(this.cartProducts);
  }

  getCartroducts() {
    return this.cartProducts;
  }

  guetCartLength() {
    return of(this.cartProducts.length);
  }

  remuveProductFromCart(id: number) {
    this.cartProducts = this.cartProducts.filter(
      (product) => product.id !== id
    );
    console.log(this.cartProducts);
  }
}

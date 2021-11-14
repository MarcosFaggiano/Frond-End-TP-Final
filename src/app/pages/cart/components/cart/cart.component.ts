import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  products: any;

  constructor(private _cartService: CartService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.products = this._cartService.getCartroducts();
  }
}

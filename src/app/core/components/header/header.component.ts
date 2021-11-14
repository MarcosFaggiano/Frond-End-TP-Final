import { Component, OnInit } from '@angular/core';
import { animationFrameScheduler } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  cartLength = 0;

  links = [
    { path: 'home', desc: 'Inicio', isIcon: false },
    { path: 'products', desc: 'Productos', isIcon: false },
    { path: 'contact', desc: 'Atencion al Cliente', isIcon: false },
    { path: 'cart', desc: 'shopping_cart', isIcon: true },
  ];

  constructor(private _cartService: CartService) {}

  ngOnInit(): void {}

  guetCartLength() {
    this._cartService
      .guetCartLength()
      .subscribe((data) => (this.cartLength = data));
  }
}

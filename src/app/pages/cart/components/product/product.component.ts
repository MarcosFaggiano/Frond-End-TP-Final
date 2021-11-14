import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() productData: any;
  @Output() productRemovalEvent = new EventEmitter();

  constructor(private _cartService: CartService) {}

  ngOnInit(): void {}

  remuveProduct() {
    this._cartService.remuveProductFromCart(this.productData.id);
    this.productRemovalEvent.emit();
  }
}

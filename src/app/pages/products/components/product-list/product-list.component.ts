import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscriber } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: any;
  loading = false;

  @Output() loadingEvent = new EventEmitter();

  constructor(private _productsService: ProductsService) {}

  ngOnInit(): void {
    this.loading = true;
    this.setLoading();
    this._productsService.getData().subscribe((data) => {
      this.products = data;
      console.log(data);
      this.loading = false;
      this.setLoading();
    });
    // console.log(this.products);
  }

  setLoading() {
    this.loadingEvent.emit(this.loading);
  }
}

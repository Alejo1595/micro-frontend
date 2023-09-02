import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { Observable } from 'rxjs';
import { Product } from './models/product';
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  standalone: true,
  providers: [ProductService],
  imports: [NgIf, CardComponent, AsyncPipe, NgFor, HttpClientModule],
})
export default class ProductsComponent {
  public product$!: Observable<Product[]>;

  private readonly productSvc = inject(ProductService);

  ngOnInit(): void {
    this.product$ = this.productSvc.getProducts();
  }
}

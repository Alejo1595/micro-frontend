import { Injectable, inject } from '@angular/core';
import { ProductService } from './product.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable()
export class ProductCustomService extends ProductService {
  protected override http = inject(HttpClient);

  public getProductsById = (productID: number): Observable<Product> => {
    return this.http.get<Product>(`${this.API}/${productID}`);
  };
}

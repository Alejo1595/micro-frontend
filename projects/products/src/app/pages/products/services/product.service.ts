import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {
  private readonly API = 'https://api.escuelajs.co/api/v1/products';
  private readonly http = inject(HttpClient);

  public getProducts = (limit = 10, offset = 0): Observable<Product[]> => {
    return this.http
      .get<Product[]>(`${this.API}/?offset=${offset}&limit=${limit}`)
      .pipe(map((products) => products.sort(() => Math.random() - 0.5)));
  };

  public getProductsById = (productID: number): Observable<Product> => {
    return this.http.get<Product>(`${this.API}/${productID}`);
  };
}

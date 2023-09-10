import { Observable, map } from 'rxjs';
import { Product } from '../models/product';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API = 'https://fakestoreapi.com/products';

export const getProducts = (limit = 10, offset = 0): Observable<Product[]> => {
  return inject(HttpClient)
    .get<Product[]>(`${API}/?offset=${offset}&limit=${limit}`)
    .pipe(map((products) => products.sort(() => Math.random() - 0.5)));
};

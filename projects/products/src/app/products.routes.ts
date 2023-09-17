import { Routes } from '@angular/router';

export const productRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/products/products.component'),
  },
];

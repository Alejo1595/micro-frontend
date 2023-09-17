import { Routes } from '@angular/router';

export const registerRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./register/register.component'),
  },
];

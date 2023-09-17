import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { authGuard } from './shared/guard/auth.guard';

export const shellRoutes: Routes = [
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full',
  },
  {
    path: 'products',
    canActivate: [authGuard],
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:5600/remoteEntry.js',
        exposedModule: './listProduct',
      }),
  },
  {
    path: 'register',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:5700/remoteEntry.js',
        exposedModule: './register',
      }),
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

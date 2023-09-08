import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { take, tap } from 'rxjs';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  return authService.isAuthenticated$().pipe(
    take(1),
    tap((isLoggedin) => (isLoggedin ? true : router.navigate(['/login'])))
  );
};

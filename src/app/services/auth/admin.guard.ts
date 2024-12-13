import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

//   console.log(authService.isAdmin());
  if (authService.isAdmin()) {
    return true;
  }
  router.navigate(['unauthorized']);
  return false;
};

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

export const vendorGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);
  if (authService.isVendor()) {
    return true;
  }
  router.navigate(['unauthorized']);
  return false;
};

export const customerGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);
  if (authService.isCustomer()) {
    return true;
  }
  router.navigate(['unauthorized']);
  return false;
};

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);
  if (authService.isLogged()) {
    return true;
  }
  router.navigate(['login']);
  return false;
};

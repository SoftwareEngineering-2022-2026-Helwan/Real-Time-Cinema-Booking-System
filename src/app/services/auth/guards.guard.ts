import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';
import { catchError, from, map, of } from 'rxjs';

export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

//   console.log(authService.isAdmin());
  if (authService.isAdmin()) {
    return true;
  }
  router.navigateByUrl('/unauthorized');
  return false;
};

export const vendorGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);
  if (authService.isVendor()) {
    return true;
  }
  router.navigateByUrl('/unauthorized');
  return false;
};

export const customerGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);
  if (authService.isCustomer()) {
    return true;
  }
  router.navigateByUrl('/unauthorized');
  return false;
};

// export const authGuard: CanActivateFn = (route, state) => {
//     const router = inject(Router);
//     const authService = inject(AuthService);
    
//     let is_logged = authService.isLogged();

//     if(is_logged) return true;

//     router.navigateByUrl('/login');
//     return false;

// };
  
export const authGuard: CanActivateFn = (route, state) => {
    const router = inject(Router);
    const authService = inject(AuthService);
  
    return authService.isLogged().pipe(
      map((isAuthenticated) => {
        if (isAuthenticated) {
          return true;
        } else {
          router.navigate(['/login']);
          return false;
        }
      }),
      catchError((err) => {
        console.error('Error in auth guard:', err);
        router.navigate(['/login']);
        return of(false);
      })
    );
  };
  

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../Services/Auth/auth';

export const authGuard: CanActivateFn = () => {

  const authService = inject(Auth);
  const router = inject(Router);

  const token = authService.getToken();

  if (token) {
    return true;
  } 
  else {
    router.navigate(['/login']);
    return false;
  }

};
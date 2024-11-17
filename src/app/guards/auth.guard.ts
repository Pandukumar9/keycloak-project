import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  //new syntax
  const authService = inject(AuthService);
  const router = inject(Router);
 return true;
  // Check if the user is authenticated
  // if (authService.isAuthenticated()) {
  //   return true;  // Allow access
  // } else {
  //   authService.redirectToLogin();  // Redirect to login if not authenticated
  //   return false;  // Block access
  // }
};

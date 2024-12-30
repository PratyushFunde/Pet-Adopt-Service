import { inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { CanActivateFn, Router } from '@angular/router';
import { map, take } from 'rxjs/operators';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const afAuth = inject(AngularFireAuth);
  const accessToken = localStorage.getItem('accessToken');

  if (accessToken) {
    return true;
  }

   // If no access token is found, redirect to login page
   router.navigate(['/login']);
   return false;

};

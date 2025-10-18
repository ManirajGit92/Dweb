import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const ErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMsg = 'An unexpected error occurred.';

      if (error.status === 0) {
        errorMsg =
          'Cannot connect to the server. Please check your internet connection.';
      } else if (error.status === 400) {
        errorMsg =
          error.error?.message || 'Bad request. Please verify your input.';
      } else if (error.status === 401) {
        errorMsg = 'Your session has expired. Please log in again.';
        router.navigate(['/auth/login']);
      } else if (error.status === 403) {
        errorMsg = 'Access denied. You do not have permission.';
      } else if (error.status === 404) {
        errorMsg = 'The requested resource was not found.';
      } else if (error.status === 500) {
        errorMsg = 'Internal server error. Please try again later.';
      }

      console.error('[HTTP Error]:', error);
      alert(errorMsg); // Replace with a toast or snackbar in real app
      return throwError(() => error);
    })
  );
};

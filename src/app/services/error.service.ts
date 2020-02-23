import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ErrorService implements ErrorHandler {
  constructor(private injector: Injector) { }
  /* Global method for handling js errors. */
  handleError(error: any) {
   const router = this.injector.get(Router);
   if (Error instanceof HttpErrorResponse) {
    console.log(error.status);
   } else {
    console.error('Øv øv øv!');
   }
   // router.navigate(['Error']);
   }
 }

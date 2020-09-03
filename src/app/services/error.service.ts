import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorLog } from '../models/error-log';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorService implements ErrorHandler {
  constructor(private data: DataService) {} // (private injector: Injector) { }
  /* Global method for handling js errors. */
  handleError(error: any) {
    console.log(error);

    const nav = window.navigator;
    const erm : ErrorLog = {
      Id : 0,
      Time : new Date(),
      Name : "",
      Message : "",
      Details : "",
      Status : error?.Status ? error?.Status : 0,
      Url : "",
      WebBrowser : nav?.appCodeName + " " + nav?.appName + " " + nav?.appVersion,
      Culture : nav?.language,
      CookiesEnabled : nav?.cookieEnabled,
      MaxTouchPoints : nav?.maxTouchPoints,
      Platform : nav?.platform,
      Connection : ""
    };

    this.data.setLog(erm);

  //   alert();
  //  // const router = this.injector.get(Router);
  //  if (Error instanceof HttpErrorResponse) {
  //   console.log(error.status);
  //  } else {
  //   console.log(error);
  //  }
   // router.navigate(['Error']);
   }
 }

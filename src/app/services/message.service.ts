import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MessageService {

  constructor() { }

  success(body: string, title?: string): void {
    alert(body);
  }

  warning(body: string, title?: string): void {
    alert(body);
  }

  error(body: string, title?: string): void {
    alert(body);
  }

  info(body: string, title?: string): void {
     alert(body);
  }

  confirm(body: string, title?: string): Observable<boolean> {
    const ok = confirm(body);
    return of (ok);
  }
}

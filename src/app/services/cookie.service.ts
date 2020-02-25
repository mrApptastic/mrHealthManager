import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieService {
  accepted = 'AcceptCookies';
  expiry = 365;

  constructor() {}

  /* Method for to check up if the accepted cookie has been set. */
  hasAccepted(): boolean {
    return localStorage && localStorage.getItem(this.accepted) === 'true';
  }

  /* Method for to check up if user has denied (stored in session storage). */
  hasDenied(): boolean {
    return sessionStorage && sessionStorage.getItem(this.accepted) === 'false';
  }

  /* Method for accepting cookies. Set in localStorage. */
  accept(): void {
    if (localStorage) {
        localStorage.setItem(this.accepted, 'true');
    }
  }

   /* Method for denying cookies. Set in sessionStorage. */
  deny(): void {
    if (sessionStorage) {
      sessionStorage.setItem(this.accepted, 'false');
    }
  }

  /* Method getting a value stored in localStorage. Falls back to sessionStorage. */
  getLocal(name: string): string {
      if (this.hasAccepted()) {
          return localStorage.getItem(name);
      } else {
        return this.getSession(name);
      }
  }

  /* Method setting a value in localStorage. Falls back to sessionStorage. */
  setLocal(name: string, text: string, noFallback?: boolean): void {
      if (this.hasAccepted()) {
        localStorage.setItem(name, text);
      } else if (noFallback !== true) {
        this.setSession(name, text);
      }
  }

  /* Method getting a value stored in sessionStorage. */
  getSession(name: string): string {
    if (sessionStorage) {
        return sessionStorage.getItem(name);
    } else {
      return '';
    }
  }

  /* Method setting a value in sessionStorage. */
  setSession(name: string, text: string): void {
    if (sessionStorage) {
      sessionStorage.setItem(name, text);
    }
  }

  /* Method getting a value stored as a standard cookie. Falls back to sessionStorage. */
  getCookie(name: string): string {
    if (document.cookie && this.hasAccepted()) {
        const cookie = name + '=';
        const ca = document.cookie.split(';');
        for (const ci of ca) {
          let c = ci;
          while (c.charAt(0) === ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(cookie) === 0) {
            return c.substring(cookie.length, c.length);
          }
        }
        return '';
    } else {
      return this.getSession(name);
    }
  }

  /* Method setting a value in a standard cookie. Falls back to sessionStorage. */
  setCookie(name: string, text: string, noFallback?: boolean): void {
    if (document.cookie && this.hasAccepted()) {
        const d = new Date();
        d.setTime(d.getTime() + (this.expiry * 24 * 60 * 60 * 1000));
        const expires = 'expires=' + d.toUTCString();
        document.cookie = name + '=' + text + ';' + expires + ';path=/';
    } else if (noFallback !== true) {
      this.setSession(name, text);
    }
  }
}

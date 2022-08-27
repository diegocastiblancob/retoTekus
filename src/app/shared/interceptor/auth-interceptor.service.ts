import { catchError } from 'rxjs/operators';
import { HttpEvent, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const Auth = JSON.parse(localStorage.getItem('token')!);
    if (!request.headers.has('Authorization')) {
      if (Auth) {
        request = this.addToken(request, Auth);
      }
    }

    if (!request.headers.has('mime')) {
      if (!request.headers.has('Content-Type')) {
        request = this.contentType(request);
      }
    }

    return next.handle(request).pipe(catchError(this.handleError));
  }

  private addToken(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        'Authorization': `Bear ${token}`
      }
    });
  }

  private contentType(request: HttpRequest<any>) {
    return request.clone({
      setHeaders: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    });
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(error);
  }
}

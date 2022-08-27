import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { User } from '../interfaces/user';
import { Subscribers } from '../interfaces/subscribers';

@Injectable({
  providedIn: 'root'
})

export class ServiceAPIService {

  private apiUrl: string = environment.apiUrl;

  constructor(
    private httpClient: HttpClient
  ) { }

  loginService(User: Auth): Observable<User> {
    let url: string = `${this.apiUrl}account/login`;
    return this.httpClient.post<Auth>(url, User).pipe(
      catchError(this.handleError),
      map((response: any) => response as User)
    );
  }

  subscribersService(): Observable<Subscribers> {
    let url: string = `${this.apiUrl}subscribers`;
    return this.httpClient.get(url).pipe(
      catchError(this.handleError),
      map((response: any) => response as Subscribers)
    );
  }

  private handleError(error: HttpErrorResponse) {
    return throwError('error en peticcion http Auth: ' + error);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, shareReplay } from 'rxjs/operators';
import * as moment from 'moment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiRoot = ' ';

  constructor(private http: HttpClient) {}

  private setSession(authResult) {
    console.log({ authResult });
  }

  get token(): string {
    return localStorage.getItem('token');
  }

  get refresh(): string {
    return localStorage.getItem('refresh');
  }
  signup(userData):Observable<any> {
    return this.http.post('',userData);
  }
  login(username: string, password: string) {
    return this.http
      .post(this.apiRoot.concat('token/'), { username, password })
      .pipe(
        tap((response) => {
          console.log({ response });
          this.setSession(response);
        }),
        shareReplay()
      );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('refresh');
    localStorage.removeItem('expires_at');
  }

  refreshToken() {
    if (
      moment().isBetween(
        this.getExpiration().subtract(1, 'days'),
        this.getExpiration()
      )
    ) {
      return this.http
        .post(this.apiRoot.concat('token/refresh/'), { refresh: this.refresh })
        .pipe(
          tap((response) => {
            console.log('refreshToken response ', response);
            this.setSession(response);
          }),
          shareReplay()
        )
        .subscribe();
    }
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);

    return moment(expiresAt);
  }

  isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Admin } from '../models/admin';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiRoot = 'https://rayneighborhood.herokuapp.com/api/adminprofile/';

  constructor(private http: HttpClient) {}

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getAdminProfile(): Observable<Admin[]> {
    return this.http.get<Admin[]>(this.apiRoot).pipe(
      tap((_) => {
        console.log('fetched profile');
      }),
      catchError(this.handleError<Admin[]>('getAdminProfile', []))
    );
  }
 
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiRoot = 'https://rayneighborhood.herokuapp.com/api/v1/profile/';


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
  profile(first_name: string,last_name: string, username: string, location: string) {
    return this.http.post(this.apiRoot, { username}).pipe(
      tap((response) => {
        console.log('Neighbourhood response ', response);
      }),
      shareReplay()
    );
  }
}
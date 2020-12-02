import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseurl=" ";

  constructor(private http: HttpClient) { }

  registerUser(user:Object):Observable<Object>{
    return this.http.post('${this.baseUrl}/',user)
  }
}

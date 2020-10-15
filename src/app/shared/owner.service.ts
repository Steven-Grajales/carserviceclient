import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  public API = 'https://thawing-chamber-47973.herokuapp.com';
  public OWNER_API = 'https://thawing-chamber-47973.herokuapp.com/owners';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.OWNER_API);
  }

  getDni(dni): Observable<any>{
    return this.http.get(this.OWNER_API + '/' + dni);
  }

  saveOwner(owner): Observable<any>{
    return this.http.post(this.OWNER_API, owner);
  }

  deleteOwner(href): Observable<any>{
    return this.http.delete(href);
  }

  updateOwner(href, owner): Observable<any>{
    return this.http.put(href, owner);
  }
}

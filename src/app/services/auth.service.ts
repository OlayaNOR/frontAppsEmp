import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Owner } from '../../models/Owner'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/petclinic/api/owners';

  constructor(private http: HttpClient) {}

  login(id: number, password: string): Observable<Owner> {
    return this.http.post<Owner>('http://localhost:8080/petclinic/api/owners/auth/login', {
      id: id,
      password: password
    });
  }

  getUserProfile(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  deleteAccount(id:number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
}
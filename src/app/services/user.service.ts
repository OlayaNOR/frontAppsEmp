import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Owner } from '../../models/Owner';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/petclinic/api/owners';

  constructor(private http: HttpClient) {}

  registerUser(userData: any) {
    return this.http.post(`${this.apiUrl}/save`, userData);
  }

  updateOwner(id: number, owner: Owner): Observable<Owner> {
    return this.http.put<Owner>(`${this.apiUrl}/update/${id}`, owner);
  }

  getAllOwners(): Observable<Owner[]> {
  return this.http.get<Owner[]>(`${this.apiUrl}/all`);
}
}
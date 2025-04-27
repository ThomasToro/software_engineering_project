import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private uri= 'http://localhost:3000/users';

  constructor(private readonly http: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.uri}`);
  }
  getUserById(id: string): Observable<User> {
    return this.http.get<User>(`${this.uri}/${id}`);
  }
}

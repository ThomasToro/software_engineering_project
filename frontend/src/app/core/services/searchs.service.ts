import { Injectable } from '@angular/core';
import { Room } from '../models/room.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SearchsService {
  private uri= 'http://localhost:3000/search/rooms';

  constructor(private readonly http: HttpClient) { }



  searchAvailableRooms(filters: any): Observable<Room[]> {
    let params = new HttpParams();
  
    for (const key in filters) {
      if (filters[key] != null) {
        params = params.set(key, filters[key]);
      }
    }
  
    return this.http.get<Room[]>(this.uri, { params });
  }
}

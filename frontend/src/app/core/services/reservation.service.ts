import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from '../models/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private apiUrl='http://localhost:3000/reservations';
  private apiUrl2='http://localhost:3000/reservations';

  constructor(private readonly http: HttpClient) { }

  makeReservation(data: any): Observable<any>{
    return this.http.post(`${this.apiUrl}`,data)
  }

  getAllReservations(): Observable<Reservation[]>{
    return this.http.get<Reservation[]>(`${this.apiUrl2}`);

  }
}

import { Component } from '@angular/core';
import { ReservationService } from '../../../core/services/reservation.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reservation-form',
  imports: [CommonModule,FormsModule],
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.scss'
})
export class ReservationFormComponent {
  reservation = {
    roomId: '',
    checkIn: '',
    checkOut: '',
    userId: ''
  };

  constructor(private reservationService: ReservationService) {}

  submit() {
    this.reservationService.makeReservation(this.reservation).subscribe({
      next: (res) => console.log('Reservado:', res),
      error: (err) => console.error('Error:', err)
    });
  }
}

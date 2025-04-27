import { Component } from '@angular/core';
import { ReservationService } from '../../../core/services/reservation.service';
import { CommonModule } from '@angular/common';
import { ReservationFormComponent } from '../components/reservation-form.component';
import { ReservationCardComponent } from '../components/reservation-card.component';

@Component({
  selector: 'app-reservations-page',
  templateUrl: './reservations-page.component.html',
  styleUrls: ['./reservations-page.component.scss'],
  standalone: true,
  imports: [CommonModule, ReservationFormComponent, ReservationCardComponent]

})
export class ReservationsPageComponent {
  constructor(private readonly reservationService: ReservationService) {}

  // Este método será llamado cuando el evento 'submitReservation' sea emitido
  onReservationSubmit(reservationData: any) {
    console.log('Datos recibidos del formulario:', reservationData);
    this.reservationService.makeReservation(reservationData).subscribe({
      next: (res) => {
        console.log('Reserva exitosa:', res);
      },
      error: (err) => {
        console.error('Error al realizar la reserva:', err);
      },
    });
  }
}

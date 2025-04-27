import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,   // <-- agrega esto aquí
    // otros módulos...
  ]
})
export class ReservationFormComponent {
  reservation = {
    roomId: '',
    checkIn: '',
    checkOut: '',
    userId: '',
  };

  // Este es el decorador @Output que emite el evento hacia el componente padre
  @Output() submitReservation = new EventEmitter<any>();

  submit() {
    // Al hacer submit, emitimos los datos del formulario al componente padre
    this.submitReservation.emit(this.reservation);
  }
}
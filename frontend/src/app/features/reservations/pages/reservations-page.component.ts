import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReservationFormComponent } from '../components/reservation-form.component';
import { ReservationCardComponent } from '../components/reservation-card.component';

@Component({
  selector: 'app-reservations-page',
  imports: [CommonModule, ReservationFormComponent, ReservationCardComponent],
  templateUrl: './reservations-page.component.html',
  styleUrl: './reservations-page.component.scss',
  standalone: true,
})
export class ReservationsPageComponent {

}

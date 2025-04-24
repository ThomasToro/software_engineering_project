import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reservation-card',
  imports:  [CommonModule],
  templateUrl: './reservation-card.component.html',
  styleUrl: './reservation-card.component.scss',
  standalone: true
})

export class ReservationCardComponent {
  @Input() reservation: any;
}
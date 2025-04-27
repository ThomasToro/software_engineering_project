import { Component } from '@angular/core';
import { profile } from 'console';
import { ProfileCardComponent } from '../components/profile-card.component';
import { ReservationCardComponent } from '../../reservations/components/reservation-card.component';
import { UserService } from '../../../core/services/user.services.service';
import { User } from '../../../core/models/user.model';
import { OnInit } from '@angular/core'; // <- Debes importar esto también
import { Reservation } from '../../../core/models/reservation.model';
import { ReservationService } from '../../../core/services/reservation.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-page',
  imports: [ProfileCardComponent,ReservationCardComponent,CommonModule, FormsModule],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.scss'
})
export class UserPageComponent implements OnInit {
  showList = false;
  reservations: Reservation []=[];


  user: User | null = null; // Inicializamos el usuario como nulo
  constructor(private readonly userService: UserService,
              private readonly reservationService: ReservationService, // Cambia esto a ReservationService si es necesario

  ) {
  }
  
  ngOnInit() {
    
    this.userService.getUserById('6809b2d6920aaf7fac84afaa').subscribe({
      next: (res) => {
        this.user = res; // Asignamos el usuario recibido a la variable user
        console.log('Usuario encontrado:', this.user);
      },
      error: (err) => { 
        console.error('Error al encontrar el usuario:', err);
      }
    });
      this.showReservations();
  }

  showReservations() {
      this.reservationService.getAllReservations().subscribe({
        next: (res) => {
          this.reservations = res; // Asignamos las reservas recibidas a la variable reservations
          console.log('Reservas encontradas:', this.reservations);
        },
        error: (err) => { 
          console.error('Error al encontrar las reservas:', err);
        }
      });
  }

  toggleLista() {
    this.showList = !this.showList;
  }

}

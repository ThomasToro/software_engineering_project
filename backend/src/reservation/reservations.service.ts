import { Injectable } from '@nestjs/common';
import { SearchHotelDto } from 'src/search/dto/search-hotel.dto';
import { ReservartionDto } from './dto/reservation.dto';

@Injectable()
export class ReservationsService {
    async reservate(reservationDto: ReservartionDto){
        //para reservar debemos  de capturar el ID del room, podemos
        //hacer que en el frontend cuando se toque la info de la reserva
        //se despliegue un botón que diga (RESERVAR)
        //De allí se van a capturar los datos del usuario (que inició sesión)con 
        //los datos de la habitación que había seleccionado


    }

    //debemos de mostrar TODAS las reservaciones con su status...
    async getAllReservations(){
        
    }
}
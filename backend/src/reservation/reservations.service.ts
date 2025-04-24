import { BadRequestException, Injectable } from '@nestjs/common';
import { SearchHotelDto } from 'src/search/dto/search-hotel.dto';
import { ReservartionDto } from './dto/reservation.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Reservation, ReservationDocument, ReservationSchema } from './schema/reservation.schema';
import { Model } from 'mongoose';
import { UserDocument } from 'src/users/schema/user.schema';

@Injectable()
export class ReservationsService {
    constructor(@InjectModel(Reservation.name) private reservationModel: Model<ReservationDocument>)
    {}
    async reservate(reservationDto: ReservartionDto){
        //para reservar debemos  de capturar el ID del room, podemos
        //hacer que en el frontend cuando se toque la info de la reserva
        //se despliegue un botón que diga (RESERVAR)
        //De allí se van a capturar los datos del usuario (que inició sesión)con 
        //los datos de la habitación que había seleccionado
        
        //aquí vamos a hacer una especie de destructuración

        const conflict = await this.reservationModel.exists({
            roomId: reservationDto.roomId,
            status: { $in: ['Pending', 'Confirmed'] },
            checkIn: { $lt: reservationDto.checkOut },
            checkOut: { $gt: reservationDto.checkIn },
        });
        
        if (conflict) {
            throw new BadRequestException('La habitación ya ha sido reservada para esas fechas');
        }

        
        const data={
            ...reservationDto
        }
        const reservation= new this.reservationModel(data);//coincide con el
                                                           //document o el schema del   
                                                           //DTO
        return reservation.save();
    }

    //debemos de mostrar TODAS las reservaciones con su status...
    async getAllReservations(){
        try {
            return await this.reservationModel.find().exec();

        } catch (error) {
            throw new BadRequestException("Error fetching reservations: "+error.message)}
    }
}
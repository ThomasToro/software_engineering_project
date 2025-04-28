import { Injectable } from '@nestjs/common';
import { SearchHotelDto } from './dto/search-hotel.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Room, RoomDocument } from 'src/room/schema/room.schema';
import { Model, Types } from 'mongoose';
import { Reservation, ReservationDocument } from 'src/reservation/schema/reservation.schema';

@Injectable()
export class SearchService {
    constructor(
        @InjectModel(Room.name) private readonly roomModel: Model<RoomDocument>,
        @InjectModel(Reservation.name) private readonly reservationModel: Model<ReservationDocument>
    )
    {}

    async searchHotel(filters: SearchHotelDto){

        const filter: any = {};

        if (filters.roomType!=null){
            filter.roomType=filters.roomType;
        }

        //se hace al hotel, toca hacer un join de hotel con habitación
        if(filters.location != null){
            filter.location=filters.location
        }

        
        if (filters.hotelId) {
            filter.hotelId = filters.hotelId;
        }

        // Filtrar por disponibilidad
        filter.availability = true; // ← ¡Aquí está!

        //vamos a usar comparaciones de mongo para armar
        //un rango en los precios de la consulta
        //dentro del objeto de filters meteremos este objeto
        //que nos será de ayuda para añadir este rango de valores

        if(filters.minPrice != undefined || filters.maxPrice != undefined){
            filter.price={};
            
            //ahora vamos a verificar la existencia de cada uno 
            //para darle valores a nuestro objeto...

            if (filters.minPrice != null){
                filter.price.$gte = filters.minPrice;
            }

            if (filters.maxPrice != null ){
                filter.price.$lte = filters.maxPrice;
            }


        }

    const candidateRooms: RoomDocument[] = await this.roomModel.find(filter).populate('hotelId');

    // Ahora filtramos las habitaciones que NO tienen reservas activas
    const availableRooms: RoomDocument[] = [];  // ← Corregido aquí

    for (const room of candidateRooms) {
        const hasConflict = await this.reservationModel.exists({
            roomId: room._id,
            status: { $in: ['Pending', 'Confirmed'] },
            checkIn: { $lt: filters.checkOut },
            checkOut: { $gt: filters.checkIn },
        });
    
        if (!hasConflict) {
            availableRooms.push(room);
        }
    }

    return availableRooms.map(room => {
        const r = room.toObject(); // Esto ya lo convierte a objeto plano
        return {
            id: r._id.toString(),
            name: r.name,
            price: r.price,
            capacity: r.capacity,
            type: r.type,
            availability: r.availability,
            hotel: r.hotelId,
        };
    });
    
    }
}


        
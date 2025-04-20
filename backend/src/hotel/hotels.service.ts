import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateHotelDto } from './dto/hotel.dto';
import { Hotel, HotelDocument } from './schema/hotel.schema';
import { Model } from 'mongoose';


    @Injectable()
export class HotelsService {
    constructor(
        @InjectModel(Hotel.name) private hotelModel: Model<HotelDocument>,
    ) {}


    //verificar si el hotel existe, si no existe lo crea, mirar que el usuario sea owner
    async create(createHotelDto: CreateHotelDto): Promise<Hotel> {
        const newHotel = new this.hotelModel(createHotelDto);
        return newHotel.save();
    }
}


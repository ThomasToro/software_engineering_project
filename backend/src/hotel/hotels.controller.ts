import { Controller, Post, Body } from '@nestjs/common';
import { CreateHotelDto } from './dto/hotel.dto';
import { HotelsService } from './hotels.service';
import { Hotel } from './schema/hotel.schema';

@Controller('hotels')
export class HotelsController {

    constructor(private readonly hotelService: HotelsService) {}

    @Post()
    async createHotel(@Body() createHotelDto: CreateHotelDto): Promise<Hotel> {
        return this.hotelService.create(createHotelDto);
    }
}

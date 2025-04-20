import { Body, Controller, Post } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { ReservartionDto } from './dto/reservation.dto';

@Controller('reservations')
export class ReservationsController {
    constructor(private readonly reservationsService: ReservationsService){
    }

    @Post()
    reservation(@Body() reservationDto: ReservartionDto ){
        // return this.reservationsService
    }
    
}

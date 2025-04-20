import { Module } from '@nestjs/common';
import { ReservationsController } from './reservations.controller';
import { ReservationsService } from './reservations.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Reservation, ReservationSchema } from './schema/reservation.schema';

@Module({
  controllers: [ReservationsController],
  providers: [ReservationsService],
  imports: [
        MongooseModule.forFeature([{ name: Reservation.name, schema: ReservationSchema }]),
  ]
})
export class ReservationsModule {}

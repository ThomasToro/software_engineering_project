import { Module } from '@nestjs/common';
import { SearchController } from './search.controller';
import { SearchService } from './search.service';
import { Room, RoomSchema } from 'src/room/schema/room.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Reservation, ReservationSchema } from 'src/reservation/schema/reservation.schema';

@Module({
  controllers: [SearchController],
  providers: [SearchService],
  imports: [
      MongooseModule.forFeature([{ name: Room.name, schema: RoomSchema }]),
      MongooseModule.forFeature([{ name: Reservation.name, schema: ReservationSchema }]),

    ],
})
export class SearchModule {}

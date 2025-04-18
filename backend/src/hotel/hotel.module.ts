import { Module } from '@nestjs/common';
import { HotelsController } from './hotels.controller';
import { HotelsService } from './hotels.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Hotel, HotelSchema } from './schema/hotel.schema';

@Module({
  controllers: [HotelsController],
  providers: [HotelsService],
  imports: [
    MongooseModule.forFeature([{ name: Hotel.name, schema: HotelSchema }]),
  ],
})
export class HotelModule {}

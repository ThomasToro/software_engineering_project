import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type HotelDocument = Hotel & Document;

@Schema()
export class Hotel {
  @Prop({ required: true })
  rooms: number;

  @Prop({ required: true })
  availability: boolean;

  @Prop({ required: true })
  location: string;
}

export const HotelSchema = SchemaFactory.createForClass(Hotel);

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

export type RoomDocument = Room & Document;

@Schema()
export class Room {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    price: number;

    @Prop({ required: true })
    capacity: number;

    @Prop({ required: true })
    type: string;

    @Prop({ required: true })
    availability: boolean;

    // Relación con el hotel
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Hotel', required: true })
    hotelId: string;
}
export const RoomSchema = SchemaFactory.createForClass(Room);

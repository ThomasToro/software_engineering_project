import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Document } from 'mongoose';

export type RoomDocument = Room & Document;


//hacer el enum de type, podemos definir 3 tipos de habitaciones:
//standart
//premium
//presidential
//con esto también se deben de variar los precios.
//se pueden insertar los precios cuando se seleccione el tipo de habitación

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
    hotelId: mongoose.Schema.Types.ObjectId;
}
export const RoomSchema = SchemaFactory.createForClass(Room);

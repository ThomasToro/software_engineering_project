import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';
import { Document } from 'mongoose';

export enum ReservationStatus {
    Pending = 'pending',
    Confirmed = 'confirmed',
    Cancelled = 'cancelled',
}

export type ReservationDocument = Reservation & Document;

@Schema()
export class Reservation {
    @Prop({ required: true, default: () => new Date() })
    bookedAt: Date;

    @Prop({ required: true })
    checkIn: Date;

    @Prop({ required: true })
    checkOut: Date;

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Room', required: true })
    roomId: MongooseSchema.Types.ObjectId;

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User', required: true })
    userId: MongooseSchema.Types.ObjectId;

    @Prop({ required: true })
    days: number;

    @Prop({ enum: ReservationStatus, default: ReservationStatus.Confirmed })
    status: ReservationStatus;
}

export const ReservationSchema = SchemaFactory.createForClass(Reservation);

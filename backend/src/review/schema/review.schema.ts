import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema, Types } from 'mongoose';

@Schema()
export class Review {

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' })
    userId: Types.ObjectId;

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Hotel' })
    hotelId: Types.ObjectId;

    @Prop()
    comment: string;

    @Prop({required: true, type: Number, min: 1, max: 5 }) // rating de 1 a 5, por ejemplo
    rating: number;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);


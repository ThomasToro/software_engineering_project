import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export enum Role {
    Admin = 'admin',
    HotelOwner = 'hotel_owner',
    Customer = 'customer',
}

export type UserDocument = User & Document;
@Schema()
export class User{
		
	@Prop({required: true})
	name: string;
	
	@Prop({required: true})
	email: string;
	
	@Prop({enum: Role, default: Role.Customer})
	role: Role;
	
	@Prop({required: true})//hashear la contra
	password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

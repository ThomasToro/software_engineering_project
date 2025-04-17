import { Prop, SchemaFactory ,Schema} from "@nestjs/mongoose";
import { Document } from "mongoose";

export type HotelDocument = Hotel & Document;
@Schema()
export class Hotel{
	@Prop({required: true})
	rooms: number;
	
	@Prop({required: true})
	avaliability: boolean;
	
	@Prop({required: true})
	location: string;
	
}
export const HotelSchema = SchemaFactory.createForClass(Hotel);

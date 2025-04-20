export class SearchHotelDto{
    location?: string;
    minPrice?: number;
    maxPrice?: number;
    roomType?: string;//podemos mandar un ENUM directamente en el front para 
                     //evitar redundancias

    checkIn?: Date;
    checkOut?: Date;
    hotelId?: string;
}

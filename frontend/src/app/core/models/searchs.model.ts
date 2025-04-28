export interface Searchs {
    location?: string;
    minPrice?: number;
    maxPrice?: number;
    roomType?: RoomType;
    checkIn?: Date;
    checkOut?: Date;
    hotelId?: string;
}
export enum RoomType {
    SINGLE = 'Single',
    DOUBLE = 'Double',
    SUITE = 'Suite',
    FAMILY = 'Family'
}
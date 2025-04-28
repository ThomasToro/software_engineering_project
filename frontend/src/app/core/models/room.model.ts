export interface Room {
    id?: string; // opcional por si lo traes desde el backend
    name: string;
    price: number;
    capacity: number;
    type: RoomType | string; // Por si quieres usar tipo libre también
    availability: boolean;
    hotelId: string; // normalmente el ID viene como string
}

export enum RoomType {
    SINGLE = 'Single',
    DOUBLE = 'Double',
    SUITE = 'Suite',
    FAMILY = 'Family',
    DELUXE = 'Deluxe'
}
export class CreateRoomDto {
    name: string;
    description: string;
    price: number;
    hotelId: string; // ID del hotel al que pertenece la habitación
    capacity: number; // Capacidad máxima de la habitación
}
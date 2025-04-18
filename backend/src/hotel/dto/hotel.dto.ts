export class CreateHotelDto {
    name: string;
    location: string;
    ownerId: string; // ID del dueño (usuario con rol HotelOwner)
                    //verficar que el ownerId es un ObjectId de MongoDB
                    // y que el usuario tiene el rol HotelOwner
}
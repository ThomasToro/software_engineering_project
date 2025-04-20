export class ReservartionDto{
    roomId: string;
    userId: string;
    bookedAt: Date;
    checkIn: Date;//cuando el usuario planea llegar
    checkOut: Date;//cuando el usuario planea entregar la habitación
}

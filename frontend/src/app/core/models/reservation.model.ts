export interface Reservation{
    userId: string;
    roomId: string;
    checkIn: Date;
    checkOut: Date;
    status?: string;
}
export interface User {
    _id: string; // ID del usuario
    name: string; // Nombre del usuario
    email: string; // Correo electrónico
    password?: string; // Contraseña (opcional si no se requiere al obtener el usuario)
//     createdAt: Date; // Fecha de creación del usuario
//     updatedAt: Date; // Fecha de última actualización
}

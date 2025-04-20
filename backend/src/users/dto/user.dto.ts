import {
    IsEmail,
    IsNotEmpty,
    IsString,
    MinLength,
    IsOptional,
    IsPhoneNumber,
    IsEnum
  } from 'class-validator';
  
export enum UserRole { //sistema clave valor 
    USER= 'user',
    ADMIN= 'admin',
    EDITOR= 'editor',
    HOTELOWNER= 'hotelOwner', //agregado para representtar el rol del administrador de hoteles
}


export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    name: string;
  
    @IsNotEmpty()
    @IsEmail()
    email: string;
  
    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    password: string;


    @IsOptional()
    @IsEnum(UserRole,{message: 'Role must be user or hotelOwner'}) //validar que el rol sea uno de los definidos en el enum
    role?: UserRole=UserRole.EDITOR; //opcional, por defecto es editor
    //es un operador ternario, si no se pasa el rol, se asigna editor por default
    //el campo es opcional desde la creacion en postman
  }

  export class LoginDto{
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;

  }

  export class RefreshTokenDto {
    @IsNotEmpty()
    @IsString()
    refreshToken: string;
  }
  

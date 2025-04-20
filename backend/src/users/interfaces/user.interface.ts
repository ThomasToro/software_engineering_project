import {
    //ChangePasswordDto,
    CreateUserDto,
    LoginDto,
    //UpdateUserDto,
  } from '../dto/user.dto';
  

export interface User {
    _id?: string;          // MongoDB 
    id?: string;           
    name: string;
    email: string;
    //isVerified: boolean;
    role: string;
    refreshToken?: string;
    //verificationCode?: string;
    //verificationCodeExpires?: Date;
    //phoneNumber?:string;
    createdAt?: Date;
    updatedAt?: Date;
  }
  
  export interface UserServiceInterface {
    create(createUserDto: CreateUserDto): Promise<User>;
    login(
      loginDto: LoginDto,
    ): Promise<{ accessToken: string; refreshToken: string; user: User }>;
    refreshToken(
      refreshToken: string,
    ): Promise<{ accessToken: string; refreshToken: string }>;

    
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User>;
    findByEmail(email: string): Promise<User>;
    
    /*
    update(id: string, updateUserDto: UpdateUserDto): Promise<User>;
    */

    remove(id: string): Promise<void>;

    //verifyUser(id: string): Promise<User>;


    /*
    changePassword(
      id: string,
      changePasswordDto: ChangePasswordDto,
    ): Promise<void>;
    */

    //resendSmsCode(phoneNumber:string):Promise<any>;
   }
    
import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UserServiceInterface, } from './interfaces/user.interface';
import { InjectModel } from '@nestjs/mongoose';
import { User as SchemaUser, User, UserDocument } from './schema/user.schema';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { Model } from 'mongoose';
import { CreateUserDto, LoginDto } from './dto/user.dto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsersService implements UserServiceInterface{
    constructor( 
        @InjectModel(User.name) private userModel: Model<UserDocument>,
        private jwtService: JwtService,
        private configService: ConfigService,
        //private emailService: EmailService,


    ){}

    async create(createUserDto:CreateUserDto): Promise<User>{
        const existingUser = await this.userModel.findOne({email:createUserDto.email}).exec();

        if (existingUser) {
            throw new Error('User already exists');
        }

        const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

        
        const newUser = new this.userModel({
            ...createUserDto,
            password: hashedPassword,
        });

        const savedUser = await newUser.save();

        return savedUser;

    }

    async login(loginDto: LoginDto): Promise<any> {
        const user = await this.userModel.findOne({ email: loginDto.email }).exec();
        
        // Check if user exists
        if (!user) {
          throw new UnauthorizedException('Invalid credentials');
        }
    
        // Check if user is verified
        /*
        if (!user.isVerified) {
          throw new UnauthorizedException('Please verify your email before logging in');
        }
        */
    
        // Compare passwords
        const isPasswordValid = await bcrypt.compare(loginDto.password, user.password);
        if (!isPasswordValid) {
          throw new UnauthorizedException('Invalid credentials');
        }

        // Generate both acces and refresh tokens
        const tokens = await this.getTokens(user.id, user.email, user.role);
        const hashedRefreshToken = await bcrypt.hash(tokens.refreshToken, 10);
        user.refreshToken = hashedRefreshToken;
        await user.save();

        return {
            ...tokens,
            user,
          };
    
        /*
        const sms = Math.floor(100000 + Math.random() * 900000).toString(); 
        const smsExpires = new Date();
        smsExpires.setMinutes(smsExpires.getMinutes() + 2); 
    
        user.smsCode =sms;
        user.smsCodeExpires=smsExpires;
    
        const savedUser= user.save();
        console.log(savedUser);
        
        this.smsService.sendOtp(user.phoneNumber,sms);
        */
        
        
      }

      async findAll(): Promise<User[]> {
        const users = await this.userModel.find().exec();
        return users.map(user => user);
      }
    
      async findOne(id: string): Promise<User> {
        const user = await this.userModel.findById(id).exec();
        if (!user) {
          throw new NotFoundException(`User with ID "${id}" not found`);
        }
        return user;
      }
    
      async findByEmail(email: string): Promise<User> {
        const user = await this.userModel.findOne({ email }).exec();
        if (!user) {
          throw new NotFoundException(`User with email "${email}" not found`);
        }
        return user;
      }


      async remove(id: string): Promise<void> {
        const result = await this.userModel.deleteOne({ _id: id }).exec();
        if (result.deletedCount === 0) {
          throw new NotFoundException(`User with ID "${id}" not found`);
        }
      }
      
    async refreshToken(refreshToken: string): Promise<{ accessToken: string; refreshToken: string }> {
        try {
          // Verify refresh token
          const payload = this.jwtService.verify(refreshToken, {
            secret: this.configService.get('JWT_REFRESH_SECRET'),
          });
    
          // Find user
          const user = await this.userModel.findById(payload.sub).exec();
          if (!user) {
            throw new UnauthorizedException('Invalid token');
          }
    
          // Validate stored refresh token
          if (!user.refreshToken) {
            throw new UnauthorizedException('Invalid token');
          }
          
          const isRefreshTokenValid = await bcrypt.compare(
            refreshToken,
            user.refreshToken
          );
          
          if (!isRefreshTokenValid) {
            throw new UnauthorizedException('Invalid token');
          }
    
          // Generate new tokens
          const tokens = await this.getTokens(user.id, user.email, user.role);
          
          // Update refresh token in database
          const hashedRefreshToken = await bcrypt.hash(tokens.refreshToken, 10);
          user.refreshToken = hashedRefreshToken;
          await user.save();
    
          return tokens;
        } catch (error) {
          throw new UnauthorizedException('Invalid token');
        }
      }

      private async getTokens(userId: string, email: string, role: string): Promise<{ accessToken: string; refreshToken: string }> {
        const [accessToken, refreshToken] = await Promise.all([
          this.jwtService.signAsync(
            {
              sub: userId,
              email,
              role,
            },
            {
              secret: this.configService.get('JWT_ACCESS_SECRET'),
              expiresIn: this.configService.get('JWT_ACCESS_EXPIRATION'),
            },
          ),
          this.jwtService.signAsync(
            {
              sub: userId,
              email,
              role,
            },
            {
              secret: this.configService.get('JWT_REFRESH_SECRET'),
              expiresIn: this.configService.get('JWT_REFRESH_EXPIRATION'),
            },
          ),
        ]);
    
        return {
          accessToken,
          refreshToken,
        };
      }

}

import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
//import { SmsModule } from './sms/sms.module';
//import { ProductsModule } from './products/products.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './users/guards/jwt-auth.guard';
import { RolesGuard } from './users/guards/roles.guard';
import { AbilitiesModule } from './abilities/abilities.module';
import { PoliciesGuard } from './users/guards/policies.guard';
//import { CategoriesModule } from './category/categories.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('MONGODB_URI'),
      }),
    }),
    UsersModule,
    //SmsModule,
    //ProductsModule,
    AbilitiesModule,
    //CategoriesModule, // Importamos el módulo de habilidades                                 
  ], 
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: PoliciesGuard,
    },
  ],
})

export class AppModule {}

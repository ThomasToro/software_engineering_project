import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Configura CORS antes de iniciar el servidor
  app.enableCors({
    origin: 'http://localhost:4200', // Permitir solo este origen
  });

  // Inicia el servidor
  await app.listen(process.env.PORT ?? 3000);
  
  }
bootstrap();

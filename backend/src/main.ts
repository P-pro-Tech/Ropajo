/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { json } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(json({ limit: 52428800 }));
  app.enableCors({
    credentials: true,
    origin: ['http://localhost:3000'],
  });
  await app.listen(3333);
}
bootstrap();

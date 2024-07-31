/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookingModule } from './booking/book.module';

@Module({
  imports: [
    BookingModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/rapajo'),
  ],
})
export class AppModule {}

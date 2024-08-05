/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';

import { BookingController } from './book.controller';
import { BookingService } from './book.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BookingModel } from './book.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Booking', schema: BookingModel.schema },
    ]),
  ],
  controllers: [BookingController],
  providers: [BookingService],
})
export class BookingModule {}

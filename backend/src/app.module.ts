/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookingModule } from './booking/book.module';
import { UserModule } from './users/users.module';
import { GuestModule } from './auth/guest/guest.module';
import { StaffModule } from './auth/staff/staff.module';

@Module({
  imports: [
    BookingModule,
    UserModule,
    GuestModule,
    StaffModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/rapajo'),
  ],
})
export class AppModule {}

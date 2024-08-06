/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookingModule } from './booking/book.module';
import { UserModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { StaffModule } from './staff/staff.module';

@Module({
  imports: [
    BookingModule,
    UserModule,
    AuthModule,
    StaffModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/rapajo'),
  ],
})
export class AppModule {}

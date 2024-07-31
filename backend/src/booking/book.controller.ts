/* eslint-disable prettier/prettier */
import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { BookingService } from './book.service';

@Controller('booking')
export class BookingController {
  constructor(private readonly bokingServie: BookingService) {}
  @Post()
  async makeBooking(
    @Body('fullName') fullName: string,
    @Body('email') email: string,
    @Body('phoneNumber') phoneNumber: string,
    @Body('identityNumber') idNumber: string,
    @Body('identityImage') idImage: string,
  ) {
    const save = await this.bokingServie.makeBooking(
      fullName,
      email,
      phoneNumber,
      idNumber,
      idImage,
    );
    return { id: save };
  }
  @Get()
  async getBookings() {
    const bookings = await this.bokingServie.getBookings();
    return bookings;
  }
  @Get(':id')
  async getBooking(@Param(':id') bookingId: string) {
    const booking = await this.bokingServie.getBooking(bookingId);
    return booking;
  }
  @Patch(':id')
  async updateBooking(
    @Param(':id') bookingId: string,
    @Body('fullName') fullName: string,
    @Body('email') email: string,
    @Body('phoneNumber') phoneNumber: string,
    @Body('identityNumber') idNumber: string,
    @Body('identityImage') image: string,
  ) {
    await this.bokingServie.updateBooking(
      bookingId,
      fullName,
      email,
      phoneNumber,
      idNumber,
      image,
    );
    return null;
  }
  @Delete(':id')
  async deleteBooking(@Param(':id') bookingId: string) {
    await this.bokingServie.deleteBooking(bookingId);
    return null;
  }
}

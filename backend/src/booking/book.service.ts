/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Booking } from './book.model';

@Injectable()
export class BookingService {
  constructor(
    @InjectModel('Booking') private readonly bookingModel: Model<Booking>,
  ) {}
  async makeBooking(
    fullName: string,
    email: string,
    phoneNumber: string,
    identityNumber: string,
    identityImage: string,
  ) {
    const newBooking = new this.bookingModel({
      fullName,
      email,
      phoneNumber,
      identityNumber,
      identityImage,
    });
    const result = await newBooking.save();
    return result._id as string;
  }
  async getBookings() {
    const bookings = await this.bookingModel.find().sort({ index: -1 }).exec();
    return bookings as Booking[];
  }
  async getBooking(bookingId) {
    const booking = await this.findBooking(bookingId);
    return booking as Booking;
  }
  async updateBooking(
    bookingId: string,
    fullName: string,
    email: string,
    phoneNumber: string,
    identityNumber: string,
    identityImage: string,
  ) {
    const booking = await this.findBooking(bookingId);
    if (fullName) {
      booking.fullName = fullName;
    }
    if (email) {
      booking.email = email;
    }
    if (phoneNumber) {
      booking.phoneNumber = phoneNumber;
    }
    if (identityNumber) {
      booking.identityNumber = identityNumber;
    }
    if (identityImage) {
      booking.identityImage = identityImage;
    }
    booking.save();
  }
  async deleteBooking(bookingId) {
    const booking = await this.bookingModel.findByIdAndDelete(bookingId).exec();
    if (booking === null) {
      throw new NotFoundException('Could not find Booking');
    }
  }

  private async findBooking(id: string): Promise<Booking> {
    let booking;
    try {
      booking = await this.bookingModel.findById(id).exec();
      return booking;
    } catch (error) {
      throw new NotFoundException('Could not find booking');
    }
  }
}

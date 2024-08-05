/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './users.model';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}
  async addGuest(
    fullName: string,
    address?: string,
    email?: string,
    occupation?: string,
    carRegNumber?: string,
    arriverDate?: string,
    arriverFrom?: string,
    guestIdPhoto?: string,
    Nationality?: string,
    phoneNumber?: string,
    passportNumber?: string,
    purpose_of_Travel?: string,
    departureDate?: string,
    departTo?: string,
    userUniqueId?: string,
  ) {
    const newUser = new this.userModel({
      fullName,
      address,
      email,
      occupation,
      carRegNumber,
      arriverDate,
      arriverFrom,
      guestIdPhoto,
      Nationality,
      phoneNumber,
      passportNumber,
      purpose_of_Travel,
      departureDate,
      departTo,
      userUniqueId,
    });
    const result = await newUser.save();
    return result._id as string;
  }
  async getGuests() {
    const guests = await this.userModel.find().exec();
    return guests as User[];
  }
  async getGuest(guestId) {
    const guest = await this.findGuest(guestId);
    return guest as User;
  }
  async updateGuest(
    guestId: string,
    fullName: string,
    address?: string,
    email?: string,
    occupation?: string,
    carRegNumber?: string,
    arriverDate?: string,
    arriverFrom?: string,
    guestIdPhoto?: string,
    Nationality?: string,
    phoneNumber?: string,
    passportNumber?: string,
    purpose_of_Travel?: string,
    departTo?: string,
    userUniquId?: string,
    departureDate?: string,
  ) {
    const guest = await this.findGuest(guestId);
    if (guest) {
      guest.fullName = fullName || guest.fullName;
      guest.address = address || guest.address;
      guest.email = email || guest.email;
      guest.occupation = occupation || guest.occupation;
      guest.carRegNumber = carRegNumber || guest.carRegNumber;
      guest.arriverDate = arriverDate || guest.arriverDate;
      guest.arriverFrom = arriverFrom || guest.arriverFrom;
      guest.guestIdPhoto = guestIdPhoto || guest.guestIdPhoto;
      guest.Nationality = Nationality || guest.Nationality;
      guest.phoneNumber = phoneNumber || guest.phoneNumber;
      guest.passportNumber = passportNumber || guest.passportNumber;
      guest.purpose_of_Travel = purpose_of_Travel || guest.purpose_of_Travel;
      guest.departureDate = departureDate || guest.departureDate;
      guest.departTo = departTo || guest.departTo;
      userUniquId = userUniquId || guest.userUniqueId;
    }
    guest.save();
  }
  async deleteGuest(guestId) {
    const guest = await this.userModel.findByIdAndDelete(guestId).exec();
    if (guest === null) {
      throw new NotFoundException('Could not find guest');
    }
  }

  private async findGuest(id: string): Promise<User> {
    let guest;
    try {
      guest = await this.userModel.findById(id).exec();
      return guest;
    } catch (error) {
      throw new NotFoundException('Could not find guest');
    }
  }
}

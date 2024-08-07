/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Staff } from './staff.model';

@Injectable()
export class StaffService {
  constructor(
    @InjectModel('Staff') private readonly staffModel: Model<Staff>,
  ) {}
  async addStaff(
    fullName: string,
    email?: string,
    address?: string,
    phoneNumber?: string,
    qualification?: string,
    position?: string,
    dateOfBirth?: string,
    photo?: string,
    idPhoto?: string,
    staffUniqueId?: string,
  ) {
    const newStaff = new this.staffModel({
      fullName,
      email,
      address,
      phoneNumber,
      qualification,
      position,
      dateOfBirth,
      photo,
      idPhoto,
      staffUniqueId,
    });
    const result = await newStaff.save();
    return result._id as string;
  }
  async getStaffs() {
    const staffs = await this.staffModel.find().exec();
    return staffs as Staff[];
  }
  async getStaff(staffId) {
    const staff = await this.findStaff(staffId);
    return staff as Staff;
  }

  async deleteStaff(staffId) {
    const staff = await this.staffModel.findByIdAndDelete(staffId).exec();
    if (staff === null) {
      throw new NotFoundException('Could not find staff');
    }
  }

  private async findStaff(id: string): Promise<Staff> {
    let staff;
    try {
      staff = await this.staffModel.findById(id).exec();
      return staff;
    } catch (error) {
      throw new NotFoundException('Could not find staff');
    }
  }
}

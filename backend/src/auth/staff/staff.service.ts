/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Staff } from '../../staff/staff.model';

@Injectable()
export class StaffService {
  constructor(
    @InjectModel(Staff.name) private staffModel: Model<Staff>,
    private jwtService: JwtService,
  ) {}

  async validateStaff(staffUniqueId: string): Promise<Staff | null> {
    const staff = await this.staffModel.findOne({ staffUniqueId }).exec();

    if (!staff) {
      return null;
    }
    return staff;
  }

  async login(staff: Staff) {
    const payload = { staffUniqueId: staff.staffUniqueId, sub: staff._id };
    return {
      access_token: this.jwtService.sign(payload),
      staff,
    };
  }
}

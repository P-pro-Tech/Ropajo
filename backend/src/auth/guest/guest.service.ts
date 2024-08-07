/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../../users/users.model';

@Injectable()
export class GuestService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async validateUser(userUniqueId: string): Promise<User | null> {
    const user = await this.userModel.findOne({ userUniqueId }).exec();

    if (!user) {
      return null;
    }

    return user;
  }

  async login(user: User) {
    const payload = { userUniqueId: user.userUniqueId, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload),
      user,
    };
  }
}

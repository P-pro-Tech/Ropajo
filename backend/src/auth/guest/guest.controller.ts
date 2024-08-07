/* eslint-disable prettier/prettier */

import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { GuestService } from './guest.service';

@Controller('guest/auth')
export class GuestController {
  constructor(private guestService: GuestService) {}

  @Post('login')
  async login(@Body('userUniqueId') userUniqueId: string) {
    const user = await this.guestService.validateUser(userUniqueId);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return this.guestService.login(user);
  }
}

/* eslint-disable prettier/prettier */

import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { StaffService } from './staff.service';

@Controller('staff/auth')
export class StaffController {
  constructor(private staffService: StaffService) {}

  @Post('login')
  async login(@Body('staffUniqueId') staffUniqueId: string) {
    const staff = await this.staffService.validateStaff(staffUniqueId);
    if (!staff) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return this.staffService.login(staff);
  }
}

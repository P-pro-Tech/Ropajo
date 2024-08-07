/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { StaffService } from './staff.service';

@Controller('staff')
export class StaffController {
  constructor(private readonly staffService: StaffService) {}
  @Post('add-staff')
  async addGuest(
    @Body('fullName') fullName: string,
    @Body('email') email: string,
    @Body('address') address: string,
    @Body('position') position: string,
    @Body('qualification') qualification: string,
    @Body('phoneNumber') phoneNumber: string,
    @Body('dateOfBirth') dateOfBirth: string,
    @Body('photo') photo: string,
    @Body('idPhoto') idPhoto: string,
    @Body('staffUniqueId') staffUniqueId: string,
  ) {
    const save = await this.staffService.addStaff(
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
    );
    return { id: save };
  }
  @Get('all-staffs')
  async getStaffs() {
    const staffs = await this.staffService.getStaffs();
    return staffs;
  }
  @Get(':id')
  async getStaff(@Param(':id') staffId: string) {
    const staff = await this.staffService.getStaff(staffId);
    return staff;
  }

  @Delete(':id')
  async deleteStaff(@Param(':id') staffId: string) {
    await this.staffService.deleteStaff(staffId);
    return null;
  }
}

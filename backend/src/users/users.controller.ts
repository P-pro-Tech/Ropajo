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
import { UserService } from './users.service';

@Controller('guest')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('add-guest')
  async addGuest(
    @Body('fullName') fullName: string,
    @Body('address') address: string,
    @Body('email') email: string,
    @Body('occupation') occupation: string,
    @Body('carRegNumber') carRegNumber: string,
    @Body('arriverDate') arriverDate: string,
    @Body('arriverFrom') arriverFrom: string,
    @Body('guestIdPhoto') guestIdPhoto: string,
    @Body('Nationality') Nationality: string,
    @Body('phoneNumber') phoneNumber: string,
    @Body('passportNumber') passportNumber: string,
    @Body('purpose_of_Travel') purpose_of_Travel: string,
    @Body('departureDate') departureDate: string,
    @Body('departTo') departTo: string,
    @Body('userUniqueId') userUniqueId: string,
  ) {
    const save = await this.userService.addGuest(
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
    );
    return { id: save };
  }
  @Get('all-guest')
  async getGuests() {
    const guests = await this.userService.getGuests();
    return guests;
  }
  @Get(':userUniqueId')
  async getGuest(@Param('userUniqueId') userUniqueId: string) {
    const guest = await this.userService.getGuest(userUniqueId);
    return guest;
  }
  @Patch(':id')
  async updateGuest(
    @Param(':id') bookingId: string,
    @Body('fullName') fullName: string,
    @Body('address') address: string,
    @Body('email') email: string,
    @Body('occupation') occupation: string,
    @Body('carRegNumber') carRegNumber: string,
    @Body('arriverDate') arriverDate: string,
    @Body('arriverFrom') arriverFrom: string,
    @Body('guestIdPhoto') guestIdPhoto: string,
    @Body('Nationality') Nationality: string,
    @Body('phoneNumber') phoneNumber: string,
    @Body('passportNumber') passportNumber: string,
    @Body('purpose_of_Travel') purpose_of_Travel: string,
    @Body('departureDate') departureDate: string,
    @Body('departTo') departTo: string,
    @Body('userUniqueId') userUniqueId: string,
  ) {
    await this.userService.updateGuest(
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
    );
    return null;
  }
  @Delete(':id')
  async deleteGuest(@Param(':id') userId: string) {
    await this.userService.deleteGuest(userId);
    return null;
  }
}

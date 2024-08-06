/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { StaffController } from './staff.controller';
import { StaffService } from './staff.service';
import { StaffModel } from './staff.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Staff', schema: StaffModel.schema }]),
  ],
  controllers: [StaffController],
  providers: [StaffService],
})
export class StaffModule {}

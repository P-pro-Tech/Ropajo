/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';

import { UserController } from './users.controller';
import { UserService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModel } from './users.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserModel.schema }]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}

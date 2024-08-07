/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { MongooseModule } from '@nestjs/mongoose';
import { GuestService } from './guest.service';
import { User, UserModel } from '../../users/users.model';
import { GuestController } from './guest.controller';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'mysecret',
      signOptions: { expiresIn: '30d' },
    }),
    MongooseModule.forFeature([{ name: User.name, schema: UserModel.schema }]),
  ],
  providers: [GuestService],
  controllers: [GuestController],
})
export class GuestModule {}

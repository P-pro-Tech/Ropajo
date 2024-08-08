/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PaymentModel } from './payment.model';
import { PaymentController } from './payments.controller';
import { PaymentService } from './payments.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Payment', schema: PaymentModel.schema },
    ]),
  ],
  controllers: [PaymentController],
  providers: [PaymentService],
})
export class PaymentModule {}

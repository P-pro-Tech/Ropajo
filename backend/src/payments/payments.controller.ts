/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Post,
  HttpException,
  HttpStatus,
  Param,
  Get,
  Patch,
} from '@nestjs/common';
import { PaymentService } from './payments.service';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post('make-payment')
  async makePayment(
    @Body('amount') amount: string,
    @Body('collectedBy') collectedBy: string,
    @Body('category') category: string,
    @Body('bill') bill: string,
    @Body('paid') paid: string,
    @Body('type') type: string,
    @Body('collectedFrom') collectedFrom: string,
    @Body('room') room: string,
  ) {
    try {
      const pay = await this.paymentService.makePayment(
        amount,
        collectedBy,
        category,
        bill,
        paid,
        type,
        collectedFrom,
        room,
      );

      return { id: pay };
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: error.message,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get('all-payments')
  async getPayments() {
    const payments = await this.paymentService.getPayments();
    return payments;
  }

  @Get(':collectedFrom')
  async getPayment(@Param('collectedFrom') userUniqueId: string) {
    const payment = await this.paymentService.getPayment(userUniqueId);
    return payment;
  }

  @Patch(':collectedFrom')
  async updatePayment(
    @Param('collectedFrom') collectedFrom: string,
    @Body('paid') paid: string,
  ) {
    await this.paymentService.updatePayment(collectedFrom, paid);
    return null;
  }
}

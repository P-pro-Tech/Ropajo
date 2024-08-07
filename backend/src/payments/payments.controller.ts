/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { PaymentService } from './payments.service';

@Controller('pay')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}
  @Post('make-payment')
  async makePayment(
    @Body('amount') amount: string,
    @Body('collectedBy') collectedBy: string,
    @Body('category') category: string,
    @Body('collectedFrom') collectedFrom: string,
    @Body('bill') bill: string,
    @Body('paid') paid: string,
  ) {
    const pay = await this.paymentService.makePayment(
      amount,
      collectedBy,
      bill,
      paid,
      collectedFrom,
    );
    return { id: pay };
  }
  async getPayments() {
    const payments = await this.paymentService.getPayments();
    return payments;
  }
}

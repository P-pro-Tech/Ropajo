/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Payment } from './payment.model';

@Injectable()
export class PaymentService {
  constructor(
    @InjectModel('Payment') private readonly paymentModel: Model<Payment>,
  ) {}

  async makePayment(
    amount: string,
    collectedBy?: string,
    category?: string,
    bill?: string,
    paid?: string,
    type?: string,
    collectedFrom?: string,
    room?: string,
  ) {
    const newPayment = await new this.paymentModel({
      amount,
      collectedBy,
      category,
      bill,
      paid,
      type,
      collectedFrom,
      room,
    });
    const result = await newPayment.save();
    return result._id as string;
  }
  async getPayments() {
    const payments = await this.paymentModel.find().exec();
    return payments as Payment[];
  }

  async getPayment(collectedFrom) {
    const payment = await this.paymentModel.find({ collectedFrom }).exec();
    return payment as Payment[];
  }
  async updatePayment(collectedFrom: string, paid: string) {
    const payment = await this.paymentModel.findOne({ collectedFrom });
    if (paid) {
      payment.paid = paid;
    }
    payment.save();
  }

  private async findPayment(id: string): Promise<Payment> {
    let payment: Payment | PromiseLike<Payment>;
    try {
      payment = await this.paymentModel.findById(id).exec();
      return payment;
    } catch (error) {
      throw new NotFoundException('Could not find payment');
    }
    return payment;
  }
}

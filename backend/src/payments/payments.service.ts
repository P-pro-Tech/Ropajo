/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Payment } from './payment.model';
import { Staff } from '../staff/staff.model';
import { User } from '../users/users.model';

@Injectable()
export class PaymentService {
  constructor(
    @InjectModel('Booking') private readonly paymentModel: Model<Payment>,
    @InjectModel('Booking') private readonly staffModel: Model<Staff>,
    @InjectModel('Booking') private readonly userModel: Model<User>,
  ) {}
  async makePayment(
    amount: string,
    collectedBy: string,
    category: string,
    collectedFrom: string,
    bill?: string,
    paid?: string,
  ) {
    const collector = [];
    const paidby = [];
    const staff = await this.staffModel.findOne({ staffUniqueId: collectedBy });
    if (staff) {
      collector.push(staff);
    }
    const guest = await this.userModel.findOne({ userUniqueId: collectedFrom });
    if (guest) {
      paidby.push(guest);
    }
    const newPayment = await new this.paymentModel({
      amount: amount,
      collectedBy: collector,
      category: category,
      bill: bill,
      paid: paid,
      collectedFrom: paidby,
    });
    const result = await newPayment.save();
    return result._id as string;
  }
  async getPayments() {
    const payments = await this.paymentModel.find().exec();
    return payments as Payment[];
  }

  private async findPayment(id: string): Promise<Payment> {
    let payment: Payment | PromiseLike<Payment>;
    try {
      payment = await this.paymentModel.findById(id).exec();
      return payment;
    } catch (error) {
      throw new NotFoundException('Could not find payment');
    }
  }
}

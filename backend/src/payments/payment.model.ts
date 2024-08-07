/* eslint-disable prettier/prettier */
import {
  getModelForClass,
  modelOptions,
  prop,
  Ref,
} from '@typegoose/typegoose';
import mongoose from 'mongoose';
import { Staff } from 'src/staff/staff.model';
import { User } from 'src/users/users.model';

@modelOptions({ schemaOptions: { timestamps: true } })
export class Payment extends mongoose.Document {
  public _id?: string;

  @prop({ required: true })
  public amount!: string;

  @prop({ required: true, ref: Staff })
  public collectedBy!: Ref<Staff>;

  @prop({ required: true })
  public category!: string;

  @prop({ required: false })
  public bill?: string;

  @prop({ required: true })
  public paid?: string;

  @prop({ required: true, ref: User })
  public collectedFrom!: Ref<User>;
}

export const PaymentModel = getModelForClass(Payment);

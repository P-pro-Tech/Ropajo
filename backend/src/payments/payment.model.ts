/* eslint-disable prettier/prettier */
import { getModelForClass, modelOptions, prop } from '@typegoose/typegoose';
import mongoose from 'mongoose';

@modelOptions({ schemaOptions: { timestamps: true } })
export class Payment extends mongoose.Document {
  public _id?: string;

  @prop({ required: false })
  public amount?: string;

  @prop({ required: false })
  public collectedBy?: string;

  @prop({ required: false, default: '' })
  public category?: string;

  @prop({ required: false })
  public bill?: string;

  @prop({ required: false, default: '0' })
  public paid?: string;

  @prop({ required: false })
  public type?: string;

  @prop({ required: false })
  public collectedFrom?: string;

  @prop({ required: false })
  public room?: string;
}

export const PaymentModel = getModelForClass(Payment);

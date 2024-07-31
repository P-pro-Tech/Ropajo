/* eslint-disable prettier/prettier */
import { getModelForClass, modelOptions, prop } from '@typegoose/typegoose';
import mongoose from 'mongoose';

@modelOptions({ schemaOptions: { timestamps: true } })
export class Booking extends mongoose.Document {
  public _id?: string;
  @prop({ required: true })
  public fullName!: string;
  @prop({ required: true, unique: true })
  public email!: string;
  @prop()
  public phoneNumber!: string;
  @prop()
  public identityNumber!: string;
  @prop()
  public identityImage?: string;
}

export const BookingModel = getModelForClass(Booking);

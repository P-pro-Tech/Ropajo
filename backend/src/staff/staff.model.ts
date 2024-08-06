/* eslint-disable prettier/prettier */
import { getModelForClass, modelOptions, prop } from '@typegoose/typegoose';
import mongoose from 'mongoose';

@modelOptions({ schemaOptions: { timestamps: true } })
export class Staff extends mongoose.Document {
  public _id?: string;

  @prop({ required: true })
  public fullName!: string;

  @prop({ required: false, unique: true })
  public email?: string;

  @prop({ required: false })
  public phoneNumber?: string;

  @prop({ required: false })
  public dateOfBirth?: string;

  @prop({ required: false })
  public idPhoto?: string;

  @prop({ required: true })
  public staffUniqueId!: string;
}

export const StaffModel = getModelForClass(Staff);

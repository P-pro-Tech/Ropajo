/* eslint-disable prettier/prettier */
import { getModelForClass, modelOptions, prop } from '@typegoose/typegoose';
import mongoose from 'mongoose';

@modelOptions({ schemaOptions: { timestamps: true } })
export class User extends mongoose.Document {
  public _id?: string;

  @prop({ required: true })
  public fullName!: string;

  @prop({ required: false })
  public address?: string;

  @prop({ required: false, unique: true })
  public email?: string;

  @prop({ required: false })
  public occupation?: string;

  @prop({ required: false })
  public carRegNumber?: string;

  @prop({ required: false })
  public arriverDate?: string;

  @prop({ required: false })
  public arriverFrom?: string;

  @prop({ required: false })
  public guestIdPhoto?: string;

  @prop({ required: false })
  public Nationality?: string;

  @prop({ required: false })
  public phoneNumber?: string;

  @prop({ required: false })
  public passportNumber?: string;

  @prop({ required: false })
  public purpose_of_Travel?: string;

  @prop({ required: false })
  public departureDate?: string;

  @prop({ required: false })
  public departTo?: string;

  @prop({ required: true })
  public userUniqueId!: string;
}

export const UserModel = getModelForClass(User);

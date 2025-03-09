import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { applyUserMethods } from './user.methods';
import { applyUserHooks } from './user.hooks';
import { IUser } from '../types';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User implements IUser {
  @Prop({ required: true, unique: true, trim: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  name: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
applyUserMethods<UserDocument>(UserSchema as any);
applyUserHooks<UserDocument>(UserSchema as any);

import { Document, Schema } from 'mongoose';
import * as bcrypt from 'bcrypt';

import { IUser } from '../types';

export function applyUserHooks<T extends Document & IUser>(
  UserSchema: Schema<T>,
) {
  UserSchema.pre('save', async function (next) {
    const user = this as T;
    if (!user.isModified('password')) return next();

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    next();
  });
}

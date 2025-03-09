import { Document, Schema } from 'mongoose';
import * as bcrypt from 'bcrypt';

import { IUser } from '../types';

export function applyUserMethods<T extends Document & IUser>(
  UserSchema: Schema<T>,
) {
  UserSchema.methods.validatePassword = function (
    password: string,
  ): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  };
}

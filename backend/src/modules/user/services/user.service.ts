import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

import { User } from '@src/modules/user/models';
import { IUser } from '@src/modules/user';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<IUser>) {}

  async addUser(userData: IUser) {
    return await this.userModel.create(userData);
  }

  async getUserByEmail(email: string) {
    return await this.userModel.findOne({ email });
  }
}

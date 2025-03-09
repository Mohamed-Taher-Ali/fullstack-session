import { IUser } from './user';

export interface ISignupUser extends IUser {
  password: string;
}

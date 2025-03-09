import { IUser } from '@src/modules/user';

export interface ISession {
  user?: Omit<IUser, 'password'>;
}

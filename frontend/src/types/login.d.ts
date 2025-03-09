import { ISignupUser } from './signup';

export type ILoginUser = Omit<ISignupUser, 'name'>;

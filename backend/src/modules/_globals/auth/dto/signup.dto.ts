import { IsEmail, IsString, MinLength } from 'class-validator';

import { IsPasswordStrong } from '@src/decorators';
import { IUser } from '@src/modules/user';

export class SignupDto implements IUser {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(3)
  name: string;

  @IsPasswordStrong()
  password: string;
}

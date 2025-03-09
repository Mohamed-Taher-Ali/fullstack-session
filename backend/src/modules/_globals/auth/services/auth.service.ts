import {
  Scope,
  Inject,
  Injectable,
  ConflictException,
  ForbiddenException,
  UnauthorizedException,
} from '@nestjs/common';

import { UserService } from '@src/modules/user';
import { SessionService } from '../../session';
import { LoginDto, SignupDto } from '../dto';
import { SessionKeys } from '../types';

@Injectable({ scope: Scope.REQUEST })
export class AuthService {
  constructor(
    @Inject() private readonly userService: UserService,
    @Inject() private readonly sessionService: SessionService,
  ) {}

  me() {
    return this.sessionService.getSessionData(SessionKeys.user);
  }

  async signup(userData: SignupDto) {
    const isExistUser = await this.userService.getUserByEmail(userData.email);
    if (isExistUser) throw new ConflictException('User already exists');

    const user = this.userService.addUser(userData);
    if (!user) throw new ForbiddenException();

    return { userCreated: true };
  }

  async login({ email, password }: LoginDto) {
    const user = await this.userService.getUserByEmail(email);

    if (!(await user?.validatePassword(password)))
      throw new UnauthorizedException('User not found');

    const { password: _, ...userData } = user.toObject();
    this.sessionService.setSessionData(SessionKeys.user, userData);

    return userData;
  }

  async logout() {
    this.sessionService.clearSession();
  }
}

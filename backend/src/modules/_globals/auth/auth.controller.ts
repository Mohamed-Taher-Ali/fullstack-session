import { Body, Controller, Inject, Post } from '@nestjs/common';

import { AuthGuard } from '@src/decorators';
import { LoginDto, SignupDto } from './dto';
import { AuthService } from './services';

@Controller('auth')
export class AuthController {
  constructor(@Inject() private readonly authService: AuthService) {}

  @AuthGuard
  @Post('me')
  async me() {
    return this.authService.me();
  }

  @Post('login')
  async login(@Body() body: LoginDto) {
    return this.authService.login(body);
  }

  @Post('logout')
  async logout() {
    return this.authService.logout();
  }

  @Post('signup')
  async signup(@Body() body: SignupDto) {
    return this.authService.signup(body);
  }
}

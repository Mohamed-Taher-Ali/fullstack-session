import { Module } from '@nestjs/common';

import { AuthController } from './auth.controller';
import { UserModule } from '@src/modules/user';
import { AuthService } from './services';

@Module({
  imports: [UserModule],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}

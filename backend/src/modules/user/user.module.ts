import { Module } from '@nestjs/common';

import { UserController } from './user.controller';
import { UserService } from './services';

@Module({
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}

import { Module } from '@nestjs/common';

import {
  ConfigMod,
  AuthModule,
  SessionModule,
  MongooseModule,
} from './_globals';
import { UserModule } from './user';
import { DashboardModule } from './dashboard';

@Module({
  imports: [
    ConfigMod,
    AuthModule,
    UserModule,
    SessionModule,
    MongooseModule,
    DashboardModule,
  ],
})
export class AppModule {}

import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule as MongooseMod } from '@nestjs/mongoose';

import { User, UserSchema } from '../user/models';
import { Global, Module } from '@nestjs/common';

@Global()
@Module({
  imports: [
    MongooseMod.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        console.log('mongo connected...');

        return {
          uri: configService.get<string>('MONGO_URI'),
        };
      },
    }),
    MongooseMod.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  exports: [MongooseMod],
})
export class MongooseModule {}

import { ConfigModule } from '@nestjs/config';

export const ConfigMod = ConfigModule.forRoot({
  isGlobal: true,
});

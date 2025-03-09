import { ConfigService } from '@nestjs/config';
import * as session from 'express-session';
import RedisStore from 'connect-redis';
import { createClient } from 'redis';

import { Env } from '@src/types';

export const useSession = async (configService: ConfigService) => {
  const redisSecret = configService.get('REDIS_SECRET');
  const redisURI = configService.get('REDIS_URI');
  const env = configService.get<Env>('ENV');

  const redisClient = createClient({ url: redisURI });

  redisClient.on('error', (err) => console.error('Redis error:', err));
  redisClient.connect().then(() => console.log('redis connected...'));

  const redisStore = new RedisStore({
    client: redisClient,
    disableTouch: true,
  });

  return session({
    resave: false,
    store: redisStore,
    secret: redisSecret,
    saveUninitialized: false,
    cookie: { secure: env === Env.production },
  });
};

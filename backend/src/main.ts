import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { ErrorInterceptor, useSession } from './middlewares';
import { AppModule } from './modules';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const port = configService.get<number>('PORT');
  const origin = configService.get('FRONTEND_URL');

  app.setGlobalPrefix('api')
  app.use(await useSession(configService));
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new ErrorInterceptor());

  app.enableCors({ origin, credentials: true });


  await app.listen(port);
}

bootstrap();

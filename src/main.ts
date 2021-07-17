import { join } from 'path';
import * as nunjucks from 'nunjucks';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const express = app.getHttpAdapter().getInstance();

  const view = join(__dirname, '..', 'view');
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(view);

  nunjucks.configure(view, { express });
  app.setViewEngine('njk');

  await app.listen(3000);
}
bootstrap();

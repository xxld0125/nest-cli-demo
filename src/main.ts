import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as cors from 'cors';

const whiteList = ['/list'];

function middleWareAll(req, res, next) {
  if (whiteList.includes(req.originalUrl)) {
    next();
  } else {
    res.send('非白名单路由');
  }
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    session({
      secret: 'nest_demo',
      rolling: true,
      name: 'nest_demo_sid',
      cookie: {
        httpOnly: true,
        maxAge: 1000000,
      },
    }),
  );

  app.use(cors());

  app.use(middleWareAll);

  await app.listen(3000);
}
bootstrap();

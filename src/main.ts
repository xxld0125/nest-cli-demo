import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as cors from 'cors';
import { Response } from './common/response';
import { HttpFilter } from './common/filter';

import { ValidationPipe } from '@nestjs/common';
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

  // 注册全局响应拦截器
  app.useGlobalInterceptors(new Response());

  // 注册全局异常拦截器
  app.useGlobalFilters(new HttpFilter());

  // 处理接口跨域
  app.use(cors());

  // 全局中间件
  // app.use(middleWareAll);

  // 接口数据管道校验
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();

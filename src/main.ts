import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as cors from 'cors';
import { Response } from './common/response';
import { HttpFilter } from './common/filter';

import { ValidationPipe } from '@nestjs/common';

// import { GuardGuard } from './guard/guard.guard';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
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

  // swagger 接口文档配置
  const options = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('nest-cli-demo')
    .setDescription('测试项目')
    .setVersion('1')
    .build();
  const ducument = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/api-docs', app, ducument);

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

  // 全局守卫
  // app.useGlobalGuards(new GuardGuard());

  await app.listen(3000);
}
bootstrap();

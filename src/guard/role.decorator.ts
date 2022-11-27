import {
  SetMetadata,
  createParamDecorator,
  ExecutionContext,
} from '@nestjs/common';
import type { Request } from 'express';
export const Role = (...args: string[]) => SetMetadata('role', args);

//自定义参数装饰器

export const ReqUrl = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest<Request>();
    console.log('data', data);
    console.log('req', req.url);

    return req.url;
  },
);

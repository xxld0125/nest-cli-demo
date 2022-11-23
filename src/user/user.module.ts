import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserService2 } from './user.service2';
import { UserController } from './user.controller';
import { LoggerMiddleware } from '../logger/logger.middleware';
@Module({
  controllers: [UserController],
  providers: [
    {
      provide: 'TestProvideName',
      useClass: UserService,
    },
    {
      provide: 'JD',
      useValue: ['TB', 'PDD', 'JD'],
    },
    UserService2,
    {
      provide: 'Test',
      inject: [UserService2],
      useFactory(UserService2: UserService2) {
        console.log('UserService2.random=====', UserService2.findAll());
        const string: string = new UserService().createString(2);
        return string;
      },
    },
    {
      provide: 'Async',
      async useFactory() {
        return await new Promise((r) => {
          setTimeout(() => {
            r('sync22');
          }, 3000);
        });
      },
    },
  ],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LoggerMiddleware).forRoutes('user');
    // consumer.apply(LoggerMiddleware).forRoutes({
    //   path: 'user',
    //   method: RequestMethod.POST,
    // });
    consumer.apply(LoggerMiddleware).forRoutes(UserController);
  }
}

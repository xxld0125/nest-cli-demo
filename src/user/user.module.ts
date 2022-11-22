import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserService2 } from './user.service2';
import { UserController } from './user.controller';

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
export class UserModule {}

import { Module, CacheModule, forwardRef } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';

import { FeishuService } from './feishu/feishu.service';
import { FeishuController } from './feishu/feishu.controller';

@Module({
  imports: [CacheModule.register()],
  controllers: [FeishuController],
  providers: [FeishuService],
})
export class UserModule {}

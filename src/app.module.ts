import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from './config/config.module';
import { ListModule } from './list/list.module';
import { PipeModule } from './pipe/pipe.module';

@Module({
  imports: [UserModule, ConfigModule, ListModule, PipeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

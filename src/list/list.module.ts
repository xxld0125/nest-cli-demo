import { Module } from '@nestjs/common';
import { ListService } from './list.service';
import { ListController } from './list.controller';
import { DymicModule } from '../dymic/dymic.module';

@Module({
  imports: [
    DymicModule.forRoot({
      path: '/dymic',
    }),
  ],
  controllers: [ListController],
  providers: [ListService],
  exports: [ListService],
})
export class ListModule {}

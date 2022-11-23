import { Test, TestingModule } from '@nestjs/testing';
import { DymicController } from './dymic.controller';
import { DymicService } from './dymic.service';

describe('DymicController', () => {
  let controller: DymicController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DymicController],
      providers: [DymicService],
    }).compile();

    controller = module.get<DymicController>(DymicController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

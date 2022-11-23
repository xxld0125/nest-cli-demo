import { Test, TestingModule } from '@nestjs/testing';
import { DymicService } from './dymic.service';

describe('DymicService', () => {
  let service: DymicService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DymicService],
    }).compile();

    service = module.get<DymicService>(DymicService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

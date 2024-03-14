import { Test, TestingModule } from '@nestjs/testing';
import { CharterRequestService } from './charter-request.service';

describe('CharterRequestService', () => {
  let service: CharterRequestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CharterRequestService],
    }).compile();

    service = module.get<CharterRequestService>(CharterRequestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

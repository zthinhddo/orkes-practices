import { Test, TestingModule } from '@nestjs/testing';
import { CharterRequestController } from './charter-request.controller';

describe('CharterRequestController', () => {
  let controller: CharterRequestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CharterRequestController],
    }).compile();

    controller = module.get<CharterRequestController>(CharterRequestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

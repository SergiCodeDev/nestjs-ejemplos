import { Test, TestingModule } from '@nestjs/testing';
import { ChatwsService } from './chatws.service';

describe('ChatwsService', () => {
  let service: ChatwsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChatwsService],
    }).compile();

    service = module.get<ChatwsService>(ChatwsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

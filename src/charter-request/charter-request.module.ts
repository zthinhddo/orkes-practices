import { Module } from '@nestjs/common';
import { CharterRequestService } from './charter-request.service';
import { CharterRequestController } from './charter-request.controller';

@Module({
  providers: [CharterRequestService],
  controllers: [CharterRequestController],
})
export class CharterRequestModule {}

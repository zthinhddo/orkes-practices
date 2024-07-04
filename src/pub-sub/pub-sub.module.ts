import { Module } from '@nestjs/common';
import { PubSubController } from './pub-sub.controller';
import { PubSubService } from './pub-sub.service';

@Module({
  providers: [PubSubService],
  controllers: [PubSubController],
})
export class PubSubModule {}

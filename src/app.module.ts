import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KafkaClientModule } from './kafka-client/kafka-client.module';
import { PubSubModule } from './pub-sub/pub-sub.module';

@Module({
  imports: [
    KafkaClientModule,
    PubSubModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

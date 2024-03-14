import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KafkaClientModule } from './kafka-client/kafka-client.module';
import { CharterRequestModule } from './charter-request/charter-request.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    KafkaClientModule,
    CharterRequestModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

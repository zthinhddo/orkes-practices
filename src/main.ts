import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions } from '@nestjs/microservices';
import { kafkaClientConfig } from 'shared/kafka/kafka-client.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>(kafkaClientConfig);
  app.startAllMicroservices();
  app.listen(3000);
}
bootstrap();

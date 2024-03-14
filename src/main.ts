import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { kafkaClientConfig } from 'shared/kafka/kafka-client.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>(kafkaClientConfig);
  app.startAllMicroservices();
  app.listen(null);
}
bootstrap();

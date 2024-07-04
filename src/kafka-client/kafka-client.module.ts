import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';

// This module now can be used in any other module to get the Kafka client
@Global()
@Module({
  providers: [
    {
      provide: 'KAFKA_PRODUCER',
      useFactory: (configService: ConfigService) => {
        return ClientProxyFactory.create({
          transport: Transport.KAFKA,
          options: {
            client: {
              ssl: true,
              clientId: configService.get<string>('KAFKA_CLIENT_ID_PRODUCER'),
              brokers: [configService.get<string>('KAFKA_BROKER_URI')],
              connectionTimeout: 4500,
              retry: {
                maxRetryTime: 1000,
              },
              sasl: {
                username: configService.get<string>('KAFKA_USERNAME'),
                password: configService.get<string>('KAFKA_PASSWORD'),
                mechanism: 'plain',
              },
            },
            producerOnlyMode: true,
            postfixId: '',
          },
        });
      },
      inject: [ConfigService],
    },
  ],
  exports: ['KAFKA_PRODUCER'],
})
export class KafkaClientModule {}

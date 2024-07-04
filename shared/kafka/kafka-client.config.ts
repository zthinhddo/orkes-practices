import { KafkaOptions, Transport } from '@nestjs/microservices';

export const kafkaClientConfig: KafkaOptions = {
  transport: Transport.KAFKA,
  options: {
    consumer: {
      groupId: process.env.CONSUMER_GROUP_ID,
    },
    client: {
      ssl: true,
      clientId: process.env.KAFKA_CLIENT_ID_CONSUMER,
      brokers: [process.env.KAFKA_BROKER_URI],
      connectionTimeout: 4500,
      retry: {
        maxRetryTime: 1000,
      },
      sasl: {
        username: process.env.KAFKA_USERNAME,
        password: process.env.KAFKA_PASSWORD,
        mechanism: 'plain',
      },
    },
    postfixId: '',
  },
};

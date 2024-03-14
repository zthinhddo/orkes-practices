import { Controller, Inject, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Controller('charter-request')
export class CharterRequestController implements OnModuleInit {
  constructor(@Inject('KAFKA_SERVICE') private client: ClientKafka) {}

  onModuleInit() {
    console.log(`The CharterRequestController has been initialized.`);
    this.client.subscribeToResponseOf('one-om-dev-workflowpoc-created-private');
    this.client.subscribeToResponseOf('one-om-dev-workflowpoc-updated-private');
    this.client.subscribeToResponseOf(
      'one-om-dev-workflowpoc-rejected-private',
    );
  }
}

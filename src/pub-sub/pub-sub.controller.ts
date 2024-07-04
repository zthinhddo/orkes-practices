import { Body, Controller, Inject, OnModuleInit, Post } from '@nestjs/common';
import { ClientKafka, MessagePattern } from '@nestjs/microservices';
import { TOPIC_FLM_IAN_CREATED, TOPIC_FLM_IAN_REJECTED, TOPIC_FLM_IAN_UPDATED } from 'shared/kafka/topics';
import { ReceiveMessageDto, SendMessageDto } from './dto/sendMessage.dto';

@Controller('charter-request')
export class PubSubController implements OnModuleInit {
  constructor(@Inject('KAFKA_PRODUCER') private client: ClientKafka) { }

  onModuleInit() {
    this.client.subscribeToResponseOf(TOPIC_FLM_IAN_UPDATED);
    this.client.subscribeToResponseOf(TOPIC_FLM_IAN_REJECTED);
  }

  onModuleDetroy() {
    this.client.close();
  }

  @Post('/api/make-new-request')
  async sendingNewRequest(@Body() sendMessageDto: SendMessageDto) {
    this.client.emit(TOPIC_FLM_IAN_CREATED, JSON.stringify({ ...sendMessageDto }));
  }

  @MessagePattern(TOPIC_FLM_IAN_UPDATED)
  async handleApprovalProcess(message: any) {
    try {
      console.log('New request received: ', message.data);
      console.log(`\nApproval message - string: ${JSON.stringify(message)}`);
    } catch (error) {
      console.log(error.toString());
    }
  }

  @MessagePattern(TOPIC_FLM_IAN_REJECTED)
  async handleRejectedProcess(message: any) {
    try {
      console.log(`\nrejected message - string: ${JSON.stringify(message)}`);
    } catch (error) {
      console.log(error.toString());
    }
  }
}

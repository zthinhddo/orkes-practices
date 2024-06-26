import { Body, Controller, Inject, OnModuleInit, Post } from '@nestjs/common';
import { ClientKafka, MessagePattern } from '@nestjs/microservices';
import { WORKFLOW_ID } from 'shared/constants';
import { TOPIC_FLM_IAN_CREATED, TOPIC_FLM_IAN_REJECTED, TOPIC_FLM_IAN_UPDATED } from 'shared/kafka/topics';
import { SendMessageDto } from './dto/sendMessage.dto';

@Controller('charter-request')
export class CharterRequestController implements OnModuleInit {
  constructor(@Inject('KAFKA_PRODUCER') private client: ClientKafka) { }

  onModuleInit() {
    console.log(`The CharterRequestController has been initialized.`);
    this.client.subscribeToResponseOf(TOPIC_FLM_IAN_CREATED);
    this.client.subscribeToResponseOf(TOPIC_FLM_IAN_UPDATED);
    this.client.subscribeToResponseOf(TOPIC_FLM_IAN_REJECTED);
  }

  onModuleDetroy() {
    this.client.close();
  }

  @Post('/api/sending-message-to-kafka')
  async sendingMessage(@Body() sendMessageDto: SendMessageDto) {
    console.log('request: ', sendMessageDto);
    this.client.emit(
      TOPIC_FLM_IAN_CREATED,
      JSON.stringify({
        product: "FLM",
        recipients: [
          "phi.dinh.tpv@one-line.com",
          "thinh.doduy.tpv@one-line.com",
          "thong.luu.tpv@one-line.com"
        ],
        options: {
          "link": "/flm/vessel-library/5cd12102-3c52-407f-998d-69dd5a11a93e"
        },
        title: "[TEST][FLM] Sending Notification to FLM",
        message: "Incoming message from tester Chou Vu"
      }),
    );
    console.log(`sent message to kafka topic - ${TOPIC_FLM_IAN_CREATED}`);
  }

  // @MessagePattern(TOPIC_FLM_IAN_CREATED)
  // async handleReceiveSentMessages(payload: any) {
  //   try {
  //     console.log('response output: ', payload);
  //   } catch (error) {
  //     console.log(error.toString());
  //   }
  // }
}

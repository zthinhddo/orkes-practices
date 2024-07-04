export class SendMessageDto {
  type: string;
  data: string;
  reason: string;
  userId: string;
}

export class ReceiveMessageDto {
  status: string;
  message: string;
}
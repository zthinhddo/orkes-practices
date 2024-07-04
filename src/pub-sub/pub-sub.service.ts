import { Injectable } from '@nestjs/common';

@Injectable()
export class PubSubService {

  getApproval(isReceived: boolean): String {
    if (isReceived) {
      return "APPROVAL";
    }
    return "REJECTED"
  }

  saveData(payload: any): String {
    console.log('payload: ', payload);
    return payload;
  }
}

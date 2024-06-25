import { Injectable } from '@nestjs/common';

@Injectable()
export class CharterRequestService {

  getApproval(isReceived: boolean): String {
    if (isReceived) {
      return "APPROVAL";
    }
    return "REJECTED"
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getCharters(): string {
    return 'Hello Chaters!';
  }
  getVessels(): string {
    return 'Hello Vessel!';
  }
}

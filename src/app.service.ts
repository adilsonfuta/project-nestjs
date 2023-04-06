import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  GetSms(value): string{
    return ' Send ' +value;
  }
}

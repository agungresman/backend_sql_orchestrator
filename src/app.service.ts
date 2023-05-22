import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  users(payload) {
    return {
      status: 201,
      dbState: ["(1, 'tom', 'France', NULL)"]
    };

    return payload;
  }
}

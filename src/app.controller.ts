import { Controller, Post, Req, Request, HttpCode} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('user/addMultiple')
  @HttpCode(200)
  users(@Req() req: Request) {
    return this.appService.users(req.body);
  }
}

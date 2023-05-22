import { Controller, Post, Req, Request} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private service: UsersService) { }

    @Post('/addMultiple')
    create(@Req() req : Request) {
        return this.service.createUser(req);
    }
}
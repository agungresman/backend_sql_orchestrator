import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.entity';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(Users) private usersRepository: Repository<Users>) { }

    async createUser(req){
        const query = req.body.cmd_chain[0].cmd;
        return this.usersRepository.query(query);
    }
}
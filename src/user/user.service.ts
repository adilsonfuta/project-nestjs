import {Injectable } from '@nestjs/common';
import { CreateUserDTO } from './DTO/create-user.dto';
import { prismaService } from 'src/prismaORM/prisma.service';

@Injectable()
export class UserService {

    constructor(private readonly prisma: prismaService){

    }

   async create({email, name , password}:CreateUserDTO){
       return await this.prisma.user.create({
            data:{
                email,
                name,
                password
            }
        })
    }

}


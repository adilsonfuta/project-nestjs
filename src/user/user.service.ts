import {Injectable } from '@nestjs/common';
import { CreateUserDTO } from './DTO/create-user.dto';
import { prismaService } from 'src/prismaORM/prisma.service';

@Injectable()
export class UserService {

    constructor(private readonly prisma: prismaService){

    }

    create({email, name , password}:CreateUserDTO){
        this.prisma.user.create({
            data:{
                email,
                name,
                password
            },
            select:{
                id: true,
                name: true
            }
        })
    }

}



import { Module } from '@nestjs/common';
import { prismaService } from './prisma.service';

@Module({
    imports:[],
    controllers:[],
    
    providers: [prismaService],
    exports:[prismaService]
})
export class PrismaModule{

}
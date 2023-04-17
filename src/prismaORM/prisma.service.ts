import { INestApplication, Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";


@Injectable()
export class prismaService extends PrismaClient implements OnModuleInit{

   async onModuleInit() {
        await this.$connect();
    }

    async EnableShutdownHooks( app: INestApplication ){
        this.$on('beforeExit', async ()=>{
            await app.close();
        })
    }

}
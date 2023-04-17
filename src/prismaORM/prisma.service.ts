import { INestApplication, Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";


@Injectable()
export class prismaService extends PrismaClient implements OnModuleInit{

    // iniciar conexao ao chamar o servico de PrismaService
   async onModuleInit() {
        await this.$connect();
    }

    // Fechar Conexao ao Fechar o PrismaService ou app
    async EnableShutdownHooks( app: INestApplication ){
        this.$on('beforeExit', async ()=>{
            await app.close();
        })
    }

}
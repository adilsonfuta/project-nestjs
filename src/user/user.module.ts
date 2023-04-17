import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { prismaService } from "src/prismaORM/prisma.service";
import { PrismaModule } from "src/prismaORM/prisma.module";

@Module({
imports: [PrismaModule],
controllers: [UserController],
providers: [UserService],
exports: []
})
export class UserModule {}
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const portAcess = 3333;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(portAcess);
}
bootstrap();

import { AppModule } from "@infrastructure/nest/app.module";
import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { NestFastifyApplication, FastifyAdapter } from "@nestjs/platform-fastify";

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());
  app.useGlobalPipes(new ValidationPipe(
    {
      transform: true,
      whitelist: true,
      transformOptions: {
        enableImplicitConversion: true
      }
    }
  ));
//   app.useGlobalFilters(new HttpExceptionsFilter);
  await app.listen(3000);
}
bootstrap();
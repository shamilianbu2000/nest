import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule,DocumentBuilder } from '@nestjs/swagger';


import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const express = require('express');
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  app.enableCors();

  const config = new DocumentBuilder()
.setTitle('Simple CRUD API')
.setDescription('CRUD Using NestJS and MySQL') .
setVersion('1.0')
.addTag('CRUD') .build();
const document = SwaggerModule.createDocument(app, config); SwaggerModule.setup('api',
app, document);
await app.listen(process.env.PORT);

}
bootstrap();

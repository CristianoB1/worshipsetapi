import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
  
//   app.enableCors();

//   const config = new DocumentBuilder()
//     .setTitle('API de Músicas')
//     .setDescription('Documentação da API da banda')
//     .setVersion('1.0')
//     .build();
//   const document = SwaggerModule.createDocument(app, config);
//   SwaggerModule.setup('api', app, document);


//   await app.listen(process.env.PORT ?? 3000);
// }
// bootstrap();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    allowedHeaders: '*'
  });

   const config = new DocumentBuilder()
     .setTitle('API de Músicas')
     .setDescription('Documentação da API da banda')
     .setVersion('1.0')
     .build();
   const document = SwaggerModule.createDocument(app, config);
   SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
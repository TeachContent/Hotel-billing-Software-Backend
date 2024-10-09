import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const whitelist = [
    'http://localhost:3001',
    'http://localhost:3000',
  ];
  // app.enableCors({
  //   origin: function (origin, callback) {
  //     if (whitelist.indexOf(origin) !== -1) {
  //       callback(null, true);
  //     } else {
  //       // callback(new Error('Not allowed by CORS'))
  //       callback(null, false);
  //     }
  //   },
  //   credentials: true,
  // });

  app.enableCors({
    origin: true, // Allow all origins
    credentials: true,
  });
  await app.listen(process.env.PORT, ()=>{
    console.log(`\x1b[1m\x1b[32m>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  SERVICE STARTED ON PORT \x1b[33m${process.env.PORT}\x1b[32m <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<\x1b[0m`);
  });
}
bootstrap();

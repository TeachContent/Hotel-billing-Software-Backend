import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from 'dotenv';
import { UserResolver } from './user/user.resolver';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './schema/database.module';
config();
@Module({
  imports: [
    MongooseModule.forRoot(process.env.DB),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: true, // Generates schema.gql file
      // playground: true, // Enable GraphQL playground in development
      installSubscriptionHandlers: true, // Enable subscriptions if needed
      resolvers: [UserResolver], // Your resolvers here
      playground: process.env.NODE_ENV === 'dev',
    }),
    DatabaseModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService, UserResolver],
})
export class AppModule {}

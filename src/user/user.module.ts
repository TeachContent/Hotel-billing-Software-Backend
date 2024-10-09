import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/schema/userSchema';
// import { UserGuard } from './user.guard';
import { DatabaseService } from 'src/schema/databaseService';
import { DatabaseModule } from 'src/schema/database.module';
import { Room, RoomSchema } from 'src/schema/roomSchema';
@Module({
  imports: [
    DatabaseModule,
  ],
  providers: [UserService, DatabaseService],
  exports: [UserService],
})
export class UserModule {}

import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import * as dotenv from 'dotenv';
import { User, UserSchema } from "./userSchema";
import { DatabaseService } from "./databaseService";
import { Room, RoomSchema } from "./roomSchema";
import { Guest, GuestSchema } from "./guestsSchema";

dotenv.config();

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
    ]),
    MongooseModule.forFeature([
      { name: Room.name, schema: RoomSchema },
    ]),
    MongooseModule.forFeature([
      { name: Guest.name, schema: GuestSchema },
    ]),
  
    
  ],
  providers: [DatabaseService],
  exports: [
    DatabaseService,
    MongooseModule.forFeature([
        { name: User.name, schema: UserSchema },
    ]),
    MongooseModule.forFeature([
      { name: Room.name, schema: RoomSchema },
    ]),
    MongooseModule.forFeature([
      { name: Guest.name, schema: GuestSchema },
    ]),
   
  ],
})
export class DatabaseModule {}
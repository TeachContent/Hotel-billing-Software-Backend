import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User,UserSchema } from './userSchema';
import { Model } from 'mongoose';
import { Room } from './roomSchema';
import { Guest } from './guestsSchema';

@Injectable()
export class DatabaseService {
  constructor(
    @InjectModel(User.name)
    public UserModel: Model<User>,
    @InjectModel(Room.name)
    public RoomModel:Model<Room>,
    @InjectModel(Guest.name)
    public GuestModel:Model<Guest>
  ) {}
}

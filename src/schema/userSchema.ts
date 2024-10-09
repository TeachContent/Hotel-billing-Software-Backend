import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectType, Field } from '@nestjs/graphql';
import { Document } from 'mongoose';
import * as bcrypt from 'bcrypt';

import { address } from './guestsSchema'; 

@ObjectType() // Define GraphQL object type
@Schema({ timestamps: true })
export class User extends Document {
  @Field()
  @Prop({ required: true })
  ownerName: string;

  @Field()
  @Prop({  })
  hotelName: string;

  @Prop({  })
  logo: string;

  @Field()
  @Prop({ required: true,  })
  email: string;

  @Field()
  @Prop({ required: true })
  number: string;

  @Field(() => String) // Define the field in GraphQL schema
  @Prop({ required: true }) // Define the field in Mongoose schema
  password: string;

  @Field()
  @Prop()
  address: address;

}

export const UserSchema = SchemaFactory.createForClass(User);

// bcrypt code for hashing password salt = 10
UserSchema.pre('save', async function (next) {
  const user: any = this;

  // Hash the password only if it has been modified or is new
  if (!user.isModified('password')) {
    return next();
  }

  try {
    const saltRounds = 10;
    const hash = await bcrypt.hash(user.password, saltRounds);

    user.password = hash;
    next();
  } catch (error) {
    return next(error);
  }
});

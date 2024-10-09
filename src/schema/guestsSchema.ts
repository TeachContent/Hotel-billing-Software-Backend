import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Document } from 'mongoose';
import { ObjectId, Types } from 'mongoose';

export enum guestStatus {
  OCCUPIED = 'OCCUPIED',
  CHECKOUT = 'CHECKOUT',
}

@ObjectType()
export class guestInfo {
  @Field(() => String)
  name: string;

  @Field(() => String)
  age: string;
}

@ObjectType()
export class address {
  @Field(() => String)
  city: string;

  @Field(() => String)
  state: string;

  @Field(() => String)
  country: string;

  @Field(() => String)
  streetAddress: string;
}

@ObjectType() // Define GraphQL object type
@Schema({ timestamps: true })
export class Guest extends Document {
  @Field()
  @Prop()
  bookId: string;

  @Prop({ type: Types.ObjectId })
  @Field(() => ID)
  room_id: ObjectId;

  @Prop({ type: Types.ObjectId })
  @Field(() => ID)
  hotel_id: ObjectId;

  @Field()
  @Prop()
  roomNo: string;

  @Field()
  @Prop()
  roomType: string;

  @Field()
  @Prop()
  guestName: string;

  @Field()
  @Prop()
  numberOfGuest: number;

  @Prop()
  @Field(() => [guestInfo])
  all_guets: guestInfo[];

  @Field()
  @Prop()
  email: string;

  @Field()
  @Prop()
  number: string;

  @Prop()
  @Field(() => address)
  address: address;

  @Prop()
  @Field(()=>Date)
  checkIn:Date

  @Prop()
  @Field(()=>Date)
  checkOut:Date

  @Prop()
  @Field(()=>String)
  additionDate:string 

  @Field()
  @Prop()
  additionalCharges: number;

  @Field()
  @Prop()
  advancePayment: number;

  @Field()
  @Prop()
  advancePaymentMode: string;
  @Field()
  @Prop({enum:guestStatus})
  status: string;
}

export const GuestSchema = SchemaFactory.createForClass(Guest);

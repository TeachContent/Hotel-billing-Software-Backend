import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Document } from 'mongoose';
import { ObjectId, Types } from 'mongoose';

@ObjectType()
export class charges {
  @Field(() => String)
  serviceName: string;

  @Field(() => Number)
  charge: number;

  @Field(() => String)
  desc: string;
}

@ObjectType() // Define GraphQL object type
@Schema({ timestamps: true })
export class Service extends Document {
  @Field()
  @Prop({ required: true })
  bookingId: string;

  @Prop({ type: Types.ObjectId })
  @Field(() => ID)
  guesId: ObjectId;

  @Field()
  @Prop({ required: true})
  roomNo: string;

  @Prop()
  @Field(() => charges)
  charges: charges;
}

export const ServiceSchema = SchemaFactory.createForClass(Service);

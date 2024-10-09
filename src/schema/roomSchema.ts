import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Document } from 'mongoose';
import { ObjectId, Types } from 'mongoose';

export enum roomStatus {
  READY = 'READY',
  CLEANING = 'CLEANING',
  OCCUPIED = 'OCCUPIED',
  CLEAN = 'CLEAN',
  ISSUE = 'ISSUE',
}

@ObjectType() // Define GraphQL object type
@Schema({ timestamps: true })
export class Room extends Document {

  @Prop({ type: Types.ObjectId })
 
  @Field({nullable:true})
  @Prop()
  roomNo: string;

  @Prop({ type: Types.ObjectId })
  @Field(() => ID)
  hotel_id: ObjectId;

  @Field({nullable:true})
  @Prop()
  roomType: string;

  @Field({nullable:true})
  @Prop()
  description: string;

  @Prop({ default: [] })
  @Field(() => [String])
  facilities: string[];

  @Field({nullable:true})
  @Prop()
  capacity: number;

  @Field({nullable:true})
  @Prop()
  charges: number;

  @Field({nullable:true})
  @Prop({default:false})
  isBooked: boolean;

  @Field({nullable:true})
  @Prop({default:false})
  isOccupied: boolean;

  @Field({nullable:true})
  @Prop({enum:roomStatus,default:roomStatus.READY})
  status: string;

}

export const RoomSchema = SchemaFactory.createForClass(Room);

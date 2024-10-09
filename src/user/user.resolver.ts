import {
  BadRequestException,
  ConflictException,
  NotFoundException,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import {
  Resolver,
  Query,
  Mutation,
  Args,
  InputType,
  Field,
  Context,
  ObjectType,
} from '@nestjs/graphql';
import { DatabaseService } from 'src/schema/databaseService';
import { Types } from 'mongoose';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { UserGuard } from './user.guard';
import { address, guestStatus } from 'src/schema/guestsSchema';
import { Room, roomStatus } from 'src/schema/roomSchema';

@InputType()
export class addresses {
  @Field(() => String)
  city: string;

  @Field(() => String)
  state: string;

  @Field(() => String)
  country: string;

  @Field(() => String)
  streetAddress: string;
}
@Resolver()
export class UserResolver {
  constructor(private readonly databaseService: DatabaseService) {}
  @Query(() => String)
  getUser(): string {
    return 'Hello, User!';
  }

  @Mutation(() => String)
  async registerUser(
    @Args('ownerName') ownerName: string,
    @Args('hotelName') hotelName: string,
    @Args('logo') logo: string,
    @Args('email') email: string,
    @Args('number') number: string,
    @Args('password') password: string,
    @Args('address') address: addresses,
  ) {
    const checkUser = await this.databaseService.UserModel.findOne({ email });
    if (checkUser) {
      throw new ConflictException('User with this emial already exists');
    }
    await new this.databaseService.UserModel({
      ownerName,
      hotelName,
      logo,
      email,
      number,
      password,
      address,
    }).save();
    return 'user created';
  }

  @Mutation(() => loginToken)
  async loginUser(
    @Args('email') email: string,
    @Args('password') password: string,
  ) {
    console.log('login');
    
    const user = await this.databaseService.UserModel.findOne({ email });
    if (!user) {
      throw new NotFoundException('User Not found');
    }
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const payload = {
      id: user._id,
    };

    return {
      token: await jwt.sign(payload, process.env.JWT_SECRET_FOR_USER_AUTH),
      id: user._id,
    };
  }

  @Query(() => userData)
  @UseGuards(UserGuard)
  async getUserData(@Context() context) {
    const userId = context.req.user.id;
    const user = await this.databaseService.UserModel.findById(userId);

    return user;
  }

  async generateCode() {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const keyLength = 10;

    let roomCode;
    let isUnique = false;

    while (!isUnique) {
      roomCode = '';

      for (let i = 0; i < keyLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        roomCode += characters.charAt(randomIndex);
      }

      // Check for the pg_key is present or not
      isUnique = await this.isKeyUnique(roomCode);
    }
    return roomCode;
  }

  async isKeyUnique(roomCode) {
    try {
      const checkKey = await this.databaseService.GuestModel.findOne({
        bookId: roomCode,
      });
      return !checkKey;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Mutation(() => String)
  @UseGuards(UserGuard)
  async createRoom(
    @Args('roomNo') roomNo: string,
    @Args('roomType') roomType: string,
    @Args('capacity') capacity: number,
    @Args('charges') charges: number,
    @Args('description') description: string,
    @Args({ name: 'facilities', type: () => [String] }) facilities: string[],
    @Context() context,
  ) {
    const hotel_id = context.req.user.id;
    const checkRoom = await this.databaseService.RoomModel.findOne({
      roomNo,
      hotel_id,
    });
    if (checkRoom) {
      console.log('occupied');
      
      throw new ConflictException('Room with this name already exist');
    }
    await new this.databaseService.RoomModel({
      roomNo,
      hotel_id,
      capacity,
      roomType,
      charges,
      description,
      facilities,
    }).save();
    return `Room ${roomNo} Created`;
  }

  @Query(() => [Room])
  @UseGuards(UserGuard)
  async getAllRooms(@Context() context) {
    console.log('rooms');
    
    const hotel_id = context.req.user.id;
    const rooms = await this.databaseService.RoomModel.find({ hotel_id });
    return rooms;
  }

  @Query(()=> Room)
  @UseGuards(UserGuard)
  async getroomData(@Args('id') id:string){
    return await this.databaseService.RoomModel.findById(id)
  }

  @Query(() => [Room])
  @UseGuards(UserGuard)
  async getAvailRooms(@Context() context) {
    console.log('rooms');
    
    const hotel_id = context.req.user.id;
    const rooms = await this.databaseService.RoomModel.find({ hotel_id,isOccupied:false });
    return rooms;
  }

  @Mutation(() => String)
  @UseGuards(UserGuard)
  async bookSingleRoom(
    @Context() context,
    @Args('roomId') roomId: string,
    @Args('guestName') guestName: string,
    @Args('numberOfGuest') numberOfGuest: number,
    @Args({ name: 'all_guets', type: () => [String] }) all_guets: string[],
    @Args('email') email: string,
    @Args('number') number: string,
    @Args('address') address: addresses,
    @Args('checkIn') checkIn: string,
    @Args('additionDate') additionDate: string,
    @Args('additionalCharges') additionalCharges: number,
    @Args('advancePayment') advancePayment: number,
    @Args('advancePaymentMode') advancePaymentMode: string,
    @Args('occuping_now') occuping_now: boolean,
    @Args('checkOut') checkOut?: string,
  ) {
    console.log('hjhh');
    console.log(roomId); 

    let checkRoom: Room;
     checkRoom =await this.databaseService.RoomModel.findById(roomId)
    console.log(checkRoom);
    
    const {roomNo}=checkRoom
    const hotel_id = context.req.user.id;
    console.log('saving');
    
    try {
     


      if (!checkRoom) {
        throw new NotFoundException("Room Not Found with this name");
      }
      console.log(checkRoom,'check');
      
      if (checkRoom.isOccupied) {
        throw new ConflictException("Room is Occupied");
      }

      const bookId = await this.generateCode();

      // Create a new guest document
      const newGuest =await new this.databaseService.GuestModel({
        bookId,
        room_id: checkRoom._id,
        hotel_id,
        roomNo,
        roomType: checkRoom.roomType,
        guestName,
        numberOfGuest,
        all_guets,
        email: email || "no mail",
        number,
        address,
        checkIn,
        checkOut,
        additionDate,
        additionalCharges,
        advancePayment,
        advancePaymentMode,
      }).save();

      

      // Update the Room status and save
      checkRoom.isBooked = true;
      if (occuping_now) {
        checkRoom.isOccupied = true;
      }
      checkRoom.status = roomStatus.OCCUPIED;

      // Explicitly set required fields
      checkRoom.markModified('isBooked');
      checkRoom.markModified('isOccupied');
      checkRoom.markModified('status');

      await checkRoom.save();

      return `Room ${roomNo} is Booked for ${guestName}`;
    } catch (error) {
      console.error('Error booking room:', error.message, error.stack);
      throw new Error('Failed to book room');
    }
  }

  @Mutation(()=>String)
  @UseGuards(UserGuard)
  async checkout(@Args('booking_id') booking_id:string){
    const guests=await this.databaseService.GuestModel.findOne({bookId:booking_id})
    if(!guests){
      throw new NotFoundException('Booking not found')
    }
    if(guests.status && guests.status === guestStatus.CHECKOUT){
      throw new ConflictException("guest is already checked out")
    }
    
  }

}

@ObjectType()
class loginToken {
  @Field(() => String)
  token: string;

  @Field(() => String)
  id: string;
}

@ObjectType()
class userData {
  @Field(() => String)
  id: string;

  @Field(() => String)
  ownerName: string;

  @Field(() => String)
  hotelName: string;

  @Field(() => String)
  logo: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  number: string;

  @Field(() => address)
  address: address;
}

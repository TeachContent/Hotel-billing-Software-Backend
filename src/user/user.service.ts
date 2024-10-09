import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { DatabaseService } from 'src/schema/databaseService';
import * as jwt from 'jsonwebtoken';
@Injectable()
export class UserService {
  constructor(private readonly databaseService: DatabaseService) {}
  async validateUser(token: string): Promise<any> {
    try {
      const decodedPayload = jwt.verify(
        token,
        process.env.JWT_SECRET_FOR_USER_AUTH,
      );
      
      const user = await this.databaseService.UserModel.findById(decodedPayload.id);
      
      
      if (user) {
        const users = {
          id: user._id,
          hotelName: user.hotelName,
          email: user.email,
          ownerNam: user.ownerName 
        };
        return users;
      }
      
      throw new NotFoundException('User not found');
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}

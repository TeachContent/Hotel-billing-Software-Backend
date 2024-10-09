import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { UserService } from 'src/user/user.service';
@Injectable()
export class UserGuard implements CanActivate {
  constructor(private readonly userService: UserService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request =
      context.switchToHttp().getRequest() ||
      GqlExecutionContext.create(context).getContext().req;
    const extractTokenFromRequest = (req: any): string | null => {
      const authorizationHeader = req.headers?.authorization;
      return authorizationHeader?.startsWith('Bearer ')
        ? authorizationHeader.split(' ')[1]
        : null;
    };
    const validateToken = async (token: string): Promise<any | null> => {
      try {
        return await this.userService.validateUser(token);
      } catch {
        return null;
      }
    };
    const token = extractTokenFromRequest(request);
    if (!token || !(await validateToken(token))) {
      return false;
    }
    
    request.user =
      request.user || (await validateToken(token));
    
    return !!request.user;
  }
}

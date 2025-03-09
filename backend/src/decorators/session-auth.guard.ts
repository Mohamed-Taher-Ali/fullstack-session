import {
  UseGuards,
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class SessionAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();

    if (!request?.session?.user) {
      throw new UnauthorizedException('User not authenticated');
    }

    return true;
  }
}

export const AuthGuard = UseGuards(SessionAuthGuard);

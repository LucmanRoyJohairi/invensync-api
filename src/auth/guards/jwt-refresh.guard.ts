import { Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class JwtRefreshAuthGuard extends AuthGuard('jwt-refresh'){
    handleRequest(err, user, info, context, status) {
    console.log(err,user);
    
    if (err || !user) {
        throw err || new UnauthorizedException(info?.message || 'Unauthorized');
    }
    return user;
    }
}
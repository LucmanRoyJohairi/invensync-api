import * as bcrypt from 'bcrypt';
import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "src/types/User";
import { UserService } from "src/users/user.service";
import { RedisService } from 'src/redis/redis.service';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService,
        private redisService: RedisService
    ){}

    async validateUser(email: string, password: string){
        console.log('LocalStrategy.validate() - incoming:', { email, password });
        const user = await this.userService.findByEmail(email);
        
        if(user && await bcrypt.compare(password, user.password_hash)){
            const { password_hash, ...result} = user
            return result;
        }
        return null;
    }

    async login(user: User){
        const payload = { email: user.email, sub: user.id};
        const accessToken =  this.jwtService.sign(payload);
        const refreshToken = this.jwtService.sign(payload, {
            secret: process.env.JWT_REFRESH_SECRET,
            expiresIn: '7d',
        });

        
        //Store refresh token in Redis (key: userID)
        await this.redisService.set(`refresh:${user.id}`, refreshToken, 60 * 60 * 24 * 7) //7 days exp


        return {
            access_token: accessToken,
            refresh_token: refreshToken,
            user: user
        }
    }


    async logout(userId: string){
        await this.redisService.del(`refresh:${userId}`)
    }

    async validateRefreshToken(userId: string, token: string): Promise<boolean>{
        const storedToken = await this.redisService.get(`refresh:${userId}`)
        return storedToken === token;
    }

    async refresh(user: User){
        const payload = { email: user.email, sub: user.id};
        return {
            access_token: this.jwtService.sign(payload),
            user: user

        }
    }


}
import * as bcrypt from 'bcrypt';
import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "src/types/User";
import { UserService } from "src/users/user.service";

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
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
        return {
            access_token: this.jwtService.sign(payload),
            refresh_token: this.jwtService.sign(payload, {
                expiresIn: '7d',
            }),
            user: user
        }
    }

    async refresh(user: User){
        const payload = { email: user.email, sub: user.id};
        return {
            access_token: this.jwtService.sign(payload),
            user: user

        }
    }


}
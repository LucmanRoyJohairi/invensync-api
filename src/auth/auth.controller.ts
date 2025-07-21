import { Controller, Get, Post, Req, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LocalAuthGuard } from "./guards/local-auth.guard";
import { AuthGuard } from "@nestjs/passport";
import { RedisService } from "src/redis/redis.service";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService, private redisService: RedisService){}

    @Get('redis')
    async testRedis() {
        await this.redisService.set('hello', 'world', 10);
        const value = await this.redisService.get('hello');
        return { value };
    }


    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Req() req){
        console.log(req.body)
        return this.authService.login(req.user);
    }


    @UseGuards(AuthGuard('jwt-refresh'))
    @Post('refresh')
    async refresh(@Req() req){
        return this.authService.refresh(req.user);
    }

}
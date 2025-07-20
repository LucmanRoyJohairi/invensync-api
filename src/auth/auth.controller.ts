import { Controller, Post, Req, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LocalAuthGuard } from "./guards/local-auth.guard";
import { AuthGuard } from "@nestjs/passport";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}


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
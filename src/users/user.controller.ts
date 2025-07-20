import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDTO } from "src/types/User";

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Get()
    async findAll() {
        return this.userService.getAllUsers();
    }

    @Get()
    async findByEmail(@Query('email') email: string) {
        return this.userService.findByEmail(email);
    }

    @Post()
    async createUser(@Body() user: CreateUserDTO) {
        return this.userService.createUser(user);
    }

}       
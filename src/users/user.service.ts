import * as bcrypt from "bcrypt";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserDTO } from "src/types/User";

@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaService){}

    async getAllUsers() {
        return this.prisma.users.findMany({
            select: {
                id: true,
                store_id: true,
                email: true,
                name: true,
                role: true,
                created_at: true,
            }
        });
    }

    async findByEmail(email: string) {
        return this.prisma.users.findUnique({
            where: { email },
            select: {
                id: true,
                store_id: true,
                email: true,
                password_hash: true,
                name: true,
                role: true,
                created_at: true,
            }
        });
    }

    async createUser(data: CreateUserDTO){
        const hashedPassword = await bcrypt.hash(data.password_hash, 10)
        return this.prisma.users.create({
            data: {
                store_id: data.store_id,
                email: data.email,
                name: data.name,
                password_hash: hashedPassword,
                role: data.role || "employee" //Default role
            },
            select: {
                id: true,
                store_id: true,
                email: true,
                name: true,
                role: true,
                created_at: true,
            }
        })
    }
}
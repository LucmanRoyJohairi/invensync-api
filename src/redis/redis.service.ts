import { Injectable, OnModuleInit } from "@nestjs/common";
import Redis from "ioredis";

@Injectable()
export class RedisService implements OnModuleInit{
    private client: Redis;

    onModuleInit() {
        this.client = new Redis({
            host: process.env.REDIS_HOST,
            port: Number(process.env.REDIS_PORT),
            password: process.env.REDIS_PASSWORD,
            // tls: {} // Enable TLS for Railway Redis
        });
    }

    async set(key: string, value: string, ttlSeconds?: number){
        if(ttlSeconds){
            await this.client.set(key, value, 'EX', ttlSeconds);
        }else{
            await this.client.set(key, value);
        }
    }

    async get(key: string){
        return this.client.get(key);
    }

    async del(key: string){
        return this.client.del(key);
    }
}
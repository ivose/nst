// redis.module.ts

import { Module } from '@nestjs/common';
//import { RedisModule as NestRedisModule } from '@nestjs-modules/ioredis';
import { RedisService } from './redis.service';
import { RedisController } from './redis.controller';

@Module({
    imports: [
        //NestRedisModule.forRoot({
        //    config: {
        //        host: 'localhost', // Your Redis host
        //        port: 6379, // Your Redis port
        //    },
        //}),
    ],
    providers: [RedisService],
    controllers: [RedisController],
    exports: [RedisService],
})
export class RedisModule { }

// redis.service.ts

import { Injectable } from '@nestjs/common';
//import { InjectRedis, Redis } from '@nestjs-modules/ioredis';

@Injectable()
export class RedisService {
    //constructor(@InjectRedis() private readonly redis: Redis) { }

    async setValue(key: string, value: string): Promise<void> {
        () => ({});
        //await this.redis.set(key, value);
    }

    async getValue(key: string): Promise<string | null> {
        return 'no-value';
        //return await this.redis.get(key);
    }

    async deleteValue(key: string): Promise<void> {
        () => ({});
        //await this.redis.del(key);
    }

    async updateValue(key: string, value: string): Promise<void> {
        () => ({});
        //await this.redis.set(key, value);
    }
}

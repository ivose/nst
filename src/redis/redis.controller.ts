// redis.controller.ts

import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { RedisService } from './redis.service';

@Controller('redis')
export class RedisController {
    constructor(private readonly redisService: RedisService) { }

    @Post()
    async setValue(@Body() body: { key: string; value: string }) {
        await this.redisService.setValue(body.key, body.value);
        return { message: 'Value set successfully' };
    }

    @Get(':key')
    async getValue(@Param('key') key: string) {
        const value = await this.redisService.getValue(key);
        return { key, value };
    }

    @Delete(':key')
    async deleteValue(@Param('key') key: string) {
        await this.redisService.deleteValue(key);
        return { message: 'Value deleted successfully' };
    }

    @Post('update')
    async updateValue(@Body() body: { key: string; value: string }) {
        await this.redisService.updateValue(body.key, body.value);
        return { message: 'Value updated successfully' };
    }
}

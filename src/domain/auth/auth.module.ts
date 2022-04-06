import { Module } from '@nestjs/common';
import {PassportModule} from "@nestjs/passport";
import {KakaoStrategy} from "./strategy/kakao.strategy";
import {AuthController} from "./auth.controller";
import {AuthService} from "./auth.service";
import {JwtModule} from "@nestjs/jwt";

@Module({
    imports:[
        PassportModule.register({}),
        JwtModule.register({secret: process.env.JWT_SECRET})

    ],
    providers: [
        KakaoStrategy,
        AuthService
    ],
    controllers: [AuthController],
    exports: []
})
export class AuthModule {}

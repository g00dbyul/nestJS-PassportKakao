import {Controller, Get, Req, UseGuards} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {KakaoGuard} from "./guard/kakao.guard";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Get('hello')
    async hello() {
        return 'Hello'
    }

    @UseGuards(KakaoGuard)
    @Get('kakao')
    async kakaologin() {
        return;
    }

    @UseGuards(KakaoGuard)
    @Get('kakao/callback')
    async kakaoCallback(@Req() req) {
        return req.user
    }
}

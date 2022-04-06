import {PassportStrategy} from "@nestjs/passport";
import {Injectable} from "@nestjs/common";
import { Strategy } from "passport-kakao"
import {AuthService} from "../auth.service";

@Injectable()
export class KakaoStrategy extends PassportStrategy(Strategy,'kakao') {
    constructor(private authService: AuthService) {
        super({
            clientID: process.env.KAKAO_KEY,
            callbackURL: process.env.KAKAO_CALLBACK_URL,
        });
    }

    async validate(accessToken: string, refreshToken: string, profile: any, done: any,) {
        console.log(accessToken)
        console.log(refreshToken)
        console.log(profile)
        const payload = {
            accessToken, refreshToken, profile
        }
        done(null, payload)
    }
}

import { Injectable } from '@nestjs/common';
import { ExtractJwt ,Strategy} from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';


@Injectable()
export class JwtService extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'dev',
      passReqToCallback: true,
    });
  }
  async validate(req: Request, payload: any) {
    try {
      return payload;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}

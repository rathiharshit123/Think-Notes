import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class ValidateUserMiddleware implements NestMiddleware {
    constructor(private JwtService: JwtService){}

  use(req: Request, res: Response, next: NextFunction) {
    try {
        if(!req.header['token']){
            return res.send({
                code: HttpStatus.UNAUTHORIZED,
                msg: "Authentication Failed"
            })
        }
        let token = req.header['token'];
        let userDetails = this.JwtService.verifyAsync(token);
        if(!userDetails){
            return res.send({
                code: HttpStatus.UNAUTHORIZED,
                msg: "Authentication Failed"
            })
        }
        next();
    } catch (error) {
        console.log({
            error,
            msg: "Authentication error"
        })
    }
  }
}

import {HttpException, Injectable, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { signUpDto } from './dto/signup.dto';
import { user, userDocument } from './schemas/user.schema';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class UserService {

  constructor(
    @InjectModel(user.name) private userModel: Model<userDocument>,
    private readonly JwtService: JwtService  
  ) {}
  async signUp(request: signUpDto) {
    try {
      let checkUserExist = await this.userModel.findOne({email: request.email});
      if(checkUserExist){
        return new HttpException('email alredy exists',HttpStatus.BAD_REQUEST)
      }

      const hashPassword = await bcrypt.hash(request.password,10);
      request.password = hashPassword;

      const newUser = new this.userModel(request);
      let userData = await newUser.save();

      let tokenData = {
        id: userData.id,
        name: userData.name,
      }

      const token = await this.JwtService.signAsync(tokenData);

      let responseObject = {
        code: 200,
        message: "User Saved Successfully",
        data : {
          token,
          ...tokenData
        },
      }
      return responseObject;
    } catch (error) {
      console.log({
        error,
        msg: "error while signup"
      })
      throw error;
    }
  }
}

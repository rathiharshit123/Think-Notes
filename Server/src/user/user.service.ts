import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { signUpDto } from './dto/signup.dto';
import { user, userDocument } from './schemas/user.schema';

@Injectable()
export class UserService {

  constructor(@InjectModel(user.name) private userModel: Model<userDocument>) {}
  async signUp(request: signUpDto) {
    const newUser = new this.userModel(request);
    let response = await newUser.save();
    return response;
  }
}

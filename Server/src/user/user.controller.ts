import { Controller } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';
import { UserService } from 'src/user/user.service';
import { loginDto } from './dto/login.dto';
import { signUpDto } from './dto/signup.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Post('signUp')
  signUp(@Body() dto: signUpDto) {
    return this.userService.signUp(dto);
  }
  
  @Post('login')
  logIn(@Body() dto: loginDto){
    return this.userService.login(dto);
  }
}

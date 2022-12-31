import { Controller } from '@nestjs/common';
import { Post } from '@nestjs/common/decorators';

@Controller('user')
export class UserController {
  @Post('signUp')
  signUp() {
    return 'SignUp Succesfull';
  }
}

import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import {user,userSchema} from './schemas/user.schema'
import {JwtModule} from '@nestjs/jwt'
@Module({
  imports : [
    MongooseModule.forFeature([{name: user.name,schema: userSchema}]),
    JwtModule.register({
      secret: 'secret',
      signOptions: {expiresIn: '1d'}
    })
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}

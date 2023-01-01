import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { NoteModule } from './note/note.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UserModule,
    NoteModule,
    MongooseModule.forRoot('mongodb://localhost:27017/ThinkNotes'),
  ],
})
export class AppModule {}

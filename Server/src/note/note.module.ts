import { Module } from '@nestjs/common';
import { NotesController } from './controller/notes/notes.controller';
import { NotesService } from './service/notes/notes.service';

@Module({
  controllers: [NotesController],
  providers: [NotesService],
})
export class NoteModule {}

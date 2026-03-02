import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MusicasModule } from './musicas/musicas.module';

@Module({
  imports: [MusicasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

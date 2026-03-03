import { Module } from '@nestjs/common';
import { MusicasController } from './musicas.controller';
import { MusicasService } from './musicas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Musica } from './musica.entity/musica.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Musica])],
  controllers: [MusicasController],
  providers: [MusicasService]
})
export class MusicasModule {}

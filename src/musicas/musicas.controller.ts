import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { MusicasService } from './musicas.service';
import { Musica } from './musica.entity/musica.entity';

@Controller('musicas')
export class MusicasController {

  constructor(private readonly musicasService: MusicasService) {}

  @Get()
  getAll() {
    return this.musicasService.findAll();
  }

  @Post()
  create(@Body() body: Partial<Musica>) {
    return this.musicasService.create(body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.musicasService.remove(Number(id));
  }
}
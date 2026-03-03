import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Musica } from './musica.entity/musica.entity';

@Injectable()
export class MusicasService {

  constructor(
    @InjectRepository(Musica)
    private musicaRepository: Repository<Musica>,
  ) {}

  findAll() {
    return this.musicaRepository.find();
  }

  create(musica: Partial<Musica>) {
    const nova = this.musicaRepository.create(musica);
    return this.musicaRepository.save(nova);
  }

  async remove(id: number) {
    await this.musicaRepository.delete(id);
    return { message: 'Música removida' };
  }
}
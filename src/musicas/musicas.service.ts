import { Injectable } from '@nestjs/common';

@Injectable()
export class MusicasService {

  private musicas = [
    {
      id: 1,
      nome: 'Nome da Música',
      tom: 'G',
      bpm: 120,
      categoria: 'Adoração',
      link: 'LINK_AQUI',
      duracao: '4:00'
    },
    {
      id: 2,
      nome: 'Nome da Música',
      tom: 'A',
      bpm: 130,
      categoria: 'Celebração',
      link: 'LINK_AQUI',
      duracao: '3:30'
    }
  ];

  findAll() {
    return this.musicas;
  }

  create(musica: any) {
    const novaMusica = {
      id: Date.now(),
      ...musica
    };

    this.musicas.push(novaMusica);
    return novaMusica;
  }

  remove(id: number) {
    this.musicas = this.musicas.filter(m => m.id !== id);
    return { message: 'Música removida' };
  }
}
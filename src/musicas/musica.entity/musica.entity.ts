import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Musica {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  tom: string;

  @Column()
  bpm: number;

  @Column()
  categoria: string;

  @Column()
  link: string;

  @Column()
  duracao: string;
}
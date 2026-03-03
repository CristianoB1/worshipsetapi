import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MusicasModule } from './musicas/musicas.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [MusicasModule, 
    TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'musicas.db',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

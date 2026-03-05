import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MusicasModule } from './musicas/musicas.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [MusicasModule,
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'db.orkjcediebvholwhqtxt.supabase.co',
    //   port: 5432,
    //   username: 'postgres',
    //   password: 'CristianoC1c@barbosa',
    //   database: 'postgres',
    //   autoLoadEntities: true,
    //   synchronize: true,
    //   ssl: {
    //     rejectUnauthorized: false,
    //   },
    // })
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgresql://neondb_owner:npg_rtQeYcX4Kxi5@ep-spring-sea-ailldw2h-pooler.c-4.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
      autoLoadEntities: true,
      synchronize: true,
      ssl: {
        rejectUnauthorized: false,
      },
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

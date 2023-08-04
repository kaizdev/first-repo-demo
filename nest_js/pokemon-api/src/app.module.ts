import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { PokemonModule } from './pokemon/pokemon.module';

@Module({
  imports: [MikroOrmModule.forRoot(), PokemonModule], //import pokemon module here
  controllers: [AppController], //import PokemonController is an option but the problem with this is that the controllers list could get huge. we create a separate module
  providers: [AppService],
})
export class AppModule {}

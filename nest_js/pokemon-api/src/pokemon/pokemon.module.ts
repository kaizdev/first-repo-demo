import { Module } from '@nestjs/common';
import { PokemonController } from './pokemon.controller';
import { PokemonService } from './pokemon.service';

// The module's job is to make sure we only create 1 instance of everything we need, and inject where needed
@Module({
  imports: [],
  controllers: [PokemonController],
  providers: [PokemonService], // add pokemon service to the provider
})
export class PokemonModule {}

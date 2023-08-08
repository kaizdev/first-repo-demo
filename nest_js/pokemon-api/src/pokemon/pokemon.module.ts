import { Module } from '@nestjs/common';
import { PokemonController } from './pokemon.controller';
import { PokemonService } from './pokemon.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Pokemon } from './entities/pokemon.entity';
import { PokemonTypeService } from './pokemon-type.service';
import { PokemonType } from './entities/pokemon-type.entity';
import { PokemonTypeController } from './pokemon-type.controller';

// The module's job is to make sure we only create 1 instance of everything we need, and inject where needed
@Module({
  imports: [MikroOrmModule.forFeature([Pokemon, PokemonType])], // tells the module which entity we are using. Allows @InjectRepository(Pokemon) in the service
  controllers: [PokemonTypeController, PokemonController],
  providers: [PokemonService, PokemonTypeService], // add pokemon service to the provider
})
export class PokemonModule {}

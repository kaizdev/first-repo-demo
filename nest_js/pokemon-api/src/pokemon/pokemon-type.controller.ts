import { Controller, Get } from '@nestjs/common';
import { PokemonTypeService } from './pokemon-type.service';
import { PokemonType } from './entities/pokemon-type.entity';

@Controller('/pokemon/types')
export class PokemonTypeController {
  constructor(private readonly pokemonTypeService: PokemonTypeService) {}

  @Get()
  async findAll(): Promise<PokemonType[]> {
    return this.pokemonTypeService.findAll();
  }
}

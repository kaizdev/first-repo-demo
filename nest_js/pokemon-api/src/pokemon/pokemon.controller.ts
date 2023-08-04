import { Body, Controller, Post } from '@nestjs/common';
import { CreatePokemonDTO } from './dtos/create-pokemon.dto';
import { PokemonService } from './pokemon.service';

@Controller('/pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Post()
  create(@Body() data: CreatePokemonDTO) {
    //validate the data first
    return this.pokemonService.create(data); //if valid, pass it down into the service
  }
}

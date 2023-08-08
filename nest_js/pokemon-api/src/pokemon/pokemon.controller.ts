import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UseFilters,
} from '@nestjs/common';
import { CreatePokemonDTO } from './dtos/create-pokemon.dto';
import { PokemonService } from './pokemon.service';
import { Pokemon } from './entities/pokemon.entity';

import * as O from 'fp-ts/Option';
import { updatePokemonDTO } from './dtos/update-pokemon.dto';
import { UniqueConstraintFilter } from 'src/shared/filters/unique-constraint.filter';
import { FilterQueryDTO } from './dtos/filter-query.dto';

// @UseFilters(new UniqueConstraintFilter()) // can use it here also
@Controller('/pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  // @UseFilters(new UniqueConstraintFilter()) // can use it here
  @Post()
  create(@Body() data: CreatePokemonDTO): Promise<Pokemon> {
    //validate the data first
    return this.pokemonService.create(data); //if valid, pass it down into the service
  }

  @Get()
  findAll(@Query() queries: FilterQueryDTO): Promise<Pokemon[]> {
    if (Object.keys(queries).length === 0) {
      return this.pokemonService.findAll();
    }
    return this.pokemonService.findByQueries(queries);
  }

  @Get(':id')
  async findById(@Param('id', ParseIntPipe) id: number): Promise<Pokemon> {
    console.log(id); // default is returning a string, even if we say typescript is a number
    console.log(typeof id);
    const maybePokemon = await this.pokemonService.findById(id);
    // if (O.isNone(maybePokemon)) {
    //   throw new NotFoundException('Cound not find pokemon with id ' + id);
    // }
    // return maybePokemon.value;
    return O.getOrElseW(() => {
      throw new NotFoundException('Could not find Pokemon with Id ' + id);
    })(maybePokemon);
  }

  @Patch(':id')
  async updateById(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: updatePokemonDTO,
  ): Promise<Pokemon> {
    const maybeUpdatedPokemon = await this.pokemonService.updateById(id, data);

    return O.getOrElseW(() => {
      throw new NotFoundException('Could not find Pokemon with Id ' + id);
    })(maybeUpdatedPokemon);
  }

  @Delete(':id')
  @HttpCode(204)
  async deleteById(@Param('id', ParseIntPipe) id: number): Promise<void> {
    const isDeleted = await this.pokemonService.deleteById(id);
    if (!isDeleted) {
      throw new NotFoundException('Could not find Pokemon with Id ' + id);
    }
  }
}

import { Injectable } from '@nestjs/common';
import { CreatePokemonDTO } from './dtos/create-pokemon.dto';
import { plainToInstance } from 'class-transformer';
import { Pokemon } from './entities/pokemon.entity';
import { EntityRepository } from '@mikro-orm/mysql';
import { InjectRepository } from '@mikro-orm/nestjs';
import * as O from 'fp-ts/Option';
import { Option } from 'fp-ts/Option';
import { updatePokemonDTO } from './dtos/update-pokemon.dto';
import { wrap } from '@mikro-orm/core';
import { PokemonTypeService } from './pokemon-type.service';
import { FilterQueryDTO } from './dtos/filter-query.dto';

@Injectable() // inject this service -> a provider is a service and repository or other things
export class PokemonService {
  constructor(
    @InjectRepository(Pokemon)
    private readonly pokemonRepository: EntityRepository<Pokemon>,
    private readonly pokemonTypeService: PokemonTypeService,
  ) {}

  async create(data: CreatePokemonDTO): Promise<Pokemon> {
    // typescript will infer this return type but we can make it explicit
    // in the CreatePokemonDTO, we have pokemonTypeIds as a property. We destructure that out so that we can find the pokemonTypes using the findAllByIds
    const { pokemonTypeIds, ...rest } = data;
    const newPokemon = plainToInstance(Pokemon, rest); // returns the Pokemon instance (e.g. Pokemon {})
    newPokemon.level = 1;
    const pokemonTypes = await this.pokemonTypeService.findAllByIds(
      pokemonTypeIds,
    );
    newPokemon.types.add(pokemonTypes);

    await this.pokemonRepository.getEntityManager().persistAndFlush(newPokemon);
    return newPokemon;
  }

  async findAll(): Promise<Pokemon[]> {
    return await this.pokemonRepository.findAll({ populate: ['types'] });
  }

  async findById(id: number): Promise<Option<Pokemon>> {
    // return await this.pokemonRepository.findOne({ id: id });
    const result = await this.pokemonRepository.findOne(
      { id },
      { populate: ['types'] },
    ); // same as the above, if the search and param are the same (e.g. id)
    // the findOne is essentially a Where search
    return O.fromNullable(result); // returns an option of a pokemon
  }

  async findByQueries(queries: FilterQueryDTO): Promise<Pokemon[]> {
    const { type, minHp = 5 } = queries;
    if (!type) {
      return await this.pokemonRepository.find({ hp: { $gte: minHp } });
    }
    const pokemonType = await this.pokemonTypeService.findOneByName(type);
    if (!pokemonType) return [];

    return await this.pokemonRepository.find({
      $and: [{ types: pokemonType }, { hp: { $gte: minHp } }],
    });
  }

  async updateById(
    id: number,
    data: updatePokemonDTO,
  ): Promise<Option<Pokemon>> {
    console.log(data);
    const result = await this.findById(id);
    if (O.isNone(result)) {
      return result;
    }
    const pokemon = result.value;
    wrap(pokemon).assign(data);
    await this.pokemonRepository.getEntityManager().flush(); // bulk update would use flush (we are already wrapping pokemon)
    return O.fromNullable(pokemon);
  }

  async deleteById(id: number): Promise<boolean> {
    const result = await this.findById(id);
    if (O.isNone(result)) {
      return false;
    }
    await this.pokemonRepository.nativeDelete(result.value);
    return true;
  }
}

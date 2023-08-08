import type { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { PokemonType } from '../pokemon/entities/pokemon-type.entity'; // must update this to a relative path (not the imported path)

// automatically populates (or seeds) the db with these types
const pokemonTypes = [
  'fire',
  'water',
  'grass',
  'electric',
  'ice',
  'fighting',
  'poison',
  'ground',
  'flying',
  'psychic',
  'bug',
  'rock',
  'ghost',
  'dark',
  'dragon',
  'steel',
  'fairy',
];

export class PokemonTypeSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    pokemonTypes.forEach((type) => em.create(PokemonType, { name: type }));
  }
}

import {
  Collection,
  Entity,
  ManyToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { Pokemon } from './pokemon.entity';

@Entity()
export class PokemonType {
  @PrimaryKey()
  id: number;

  @Property()
  name: string;

  @ManyToMany(() => Pokemon, (pokemon) => pokemon.types, { owner: true })
  pokemon = new Collection<Pokemon>(this);
}

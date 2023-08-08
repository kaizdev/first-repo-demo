import {
  Collection,
  Entity,
  ManyToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { Expose } from 'class-transformer';
import { PokemonType } from './pokemon-type.entity';

@Entity()
export class Pokemon {
  @PrimaryKey() // Auto increment is the default behaviour for id when @PrimaryKey() is added
  id: number;

  @Property({ unique: true })
  name: string;

  // @Property()
  @ManyToMany(() => PokemonType, (type) => type.pokemon)
  types = new Collection<PokemonType>(this); // a collection of pokemon types
  // type: string;

  @Property()
  hp: number;
  @Property()
  imageLink: string;
  @Property({ nullable: true })
  evolutionID: number;
  @Property()
  @Expose({ name: 'level' }) // when using plainToInstance -> do something with this value -> sort of like modelMapper
  level: number;
}

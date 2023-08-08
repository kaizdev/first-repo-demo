import { Transform } from 'class-transformer';
import { IsEnum, IsOptional, Min } from 'class-validator';

enum PokemonType {
  FIRE = 'fire',
  WATER = 'water',
  GRASS = 'grass',
  ELECTRIC = 'electric',
  ICE = 'ice',
  FIGHTING = 'fighting',
  POISON = 'poison',
  GROUND = 'ground',
  FLYING = 'flying',
  PSYCHIC = 'psychic',
  BUG = 'bug',
  ROCK = 'rock',
  GHOST = 'ghost',
  DARK = 'dark',
  DRAGON = 'dragon',
  STEEL = 'steel',
  FAIRY = 'fairy',
}

export class FilterQueryDTO {
  @IsOptional()
  @IsEnum(PokemonType)
  type: string;

  @IsOptional()
  @Min(5)
  @Transform(({ value }) => parseInt(value))
  minHp: number;
}

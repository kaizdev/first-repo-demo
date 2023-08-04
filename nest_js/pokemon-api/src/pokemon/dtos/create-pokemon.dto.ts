import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  Min,
  MinLength,
} from 'class-validator';

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

export class CreatePokemonDTO {
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  name: string;

  @IsEnum(PokemonType)
  type: string;

  @IsNumber()
  @Min(5)
  hp: number;

  @IsUrl()
  imageLink: string;

  @IsOptional() // if there ignore validators. if there, check validators
  @IsNumber()
  @Min(1)
  evolutionID: number;
}

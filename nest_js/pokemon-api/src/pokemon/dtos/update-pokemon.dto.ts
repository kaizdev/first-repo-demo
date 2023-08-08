import { PartialType } from '@nestjs/mapped-types';
import { CreatePokemonDTO } from './create-pokemon.dto';
import { IsNumber, IsOptional, Min } from 'class-validator';

export class updatePokemonDTO extends PartialType(CreatePokemonDTO) {
  @IsOptional()
  @IsNumber()
  @Min(2)
  level: number;
}

// can have additional fields in update DTO if we wanted to.

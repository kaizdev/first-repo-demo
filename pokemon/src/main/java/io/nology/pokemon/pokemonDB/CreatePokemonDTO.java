package io.nology.pokemon.pokemonDB;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;

public class CreatePokemonDTO {

  @NotBlank
  String name;

  @NotBlank
  @Pattern(
    regexp = "^(Normal|Fire|Water|Grass|Electric|Ice|Fighting|Poison|Ground|Flying|Psychic|Bug|Rock|Ghost|Dark|Dragon|Steel|Fairy)$",
    message = "Invalid Pokemon Type. Please enter a valid type"
  )
  String type;

  @Min(1)
  int hp;

  @NotBlank
  String imageLink;

  //EvolutionID can be optional (null)
  int evolutionID;

  public String getName() {
    return this.name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getType() {
    return this.type;
  }

  public void setType(String type) {
    this.type = type;
  }

  public int getHp() {
    return this.hp;
  }

  public void setHp(int hp) {
    this.hp = hp;
  }

  public String getImageLink() {
    return this.imageLink;
  }

  public void setImageLink(String imageLink) {
    this.imageLink = imageLink;
  }

  public int getEvolutionID() {
    return this.evolutionID;
  }

  public void setEvolutionID(int evolutionID) {
    this.evolutionID = evolutionID;
  }

  public CreatePokemonDTO() {}

  public CreatePokemonDTO(
    String name,
    String type,
    int hp,
    String imageLink,
    int evolutionID
  ) {
    this.name = name;
    this.type = type;
    this.hp = hp;
    this.imageLink = imageLink;
    this.evolutionID = evolutionID;
  }
}

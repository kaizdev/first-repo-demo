package io.nology.pokemon.pokemonDB;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Pattern;

public class UpdatePokemonDTO {

  @Pattern(regexp = "^(?=\\S).*$", message = "Name cannot be an empty string")
  String name;

  @Pattern(
    regexp = "^(Normal|Fire|Water|Grass|Electric|Ice|Fighting|Poison|Ground|flying|Psychic|Bug|Rock|Ghost|Dark|Dragon|Steel|Fairy)$",
    message = "Invalid Pokemon Type. Please enter a valid type"
  )
  String type;

  @Min(1)
  int hp;

  @Pattern(
    regexp = "^(?=\\S).*$",
    message = "Image Link cannot be an empty string"
  )
  String imageLink;

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
}

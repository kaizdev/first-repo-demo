package io.nology.pokemon.pokemonDB;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "pokemon")
public class Pokemon {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  // all properties here are columns in the database in the pokemon table

  @Column(unique = true)
  private String name;

  @Column
  private String type;

  @Column
  private int hp;

  @Column
  private String imageLink;

  @Column
  private int evolutionID;

  public Long getId() {
    return this.id;
  }

  public void setId(Long id) {
    this.id = id;
  }

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

  public Pokemon() {}

  public Pokemon(
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

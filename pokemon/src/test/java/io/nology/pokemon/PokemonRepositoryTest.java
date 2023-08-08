package io.nology.pokemon;

import io.nology.pokemon.pokemonDB.Pokemon;
import io.nology.pokemon.pokemonDB.PokemonRepository;
import java.util.List;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

@DataJpaTest
public class PokemonRepositoryTest {

  @Autowired
  private PokemonRepository underTest;

  @AfterEach
  void tearDown() {
    underTest.deleteAll();
  }

  @Test
  void itShouldFindByTypeAndReturnCorrectResult() {
    Pokemon pikachu = new Pokemon(
      "pikachu",
      "Electric",
      35,
      "http://pika.com",
      172
    );
    underTest.save(pikachu);

    List<Pokemon> received = underTest.findByType("Electric");
    Assertions.assertThat(received).hasSize(1);
    Assertions
      .assertThat(received.get(0))
      //   .usingRecursiveComparison()
      .isEqualTo(pikachu);
  }
}

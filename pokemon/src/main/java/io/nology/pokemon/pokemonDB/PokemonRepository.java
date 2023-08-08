package io.nology.pokemon.pokemonDB;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PokemonRepository extends JpaRepository<Pokemon, Long> {
  List<Pokemon> findByType(String type); // add this as a new search term
  List<Pokemon> findByHpGreaterThanEqual(int hp);
}

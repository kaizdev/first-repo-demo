package io.nology.pokemon.pokemonDB;

import jakarta.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class PokemonService {

  @Autowired
  private PokemonRepository pokemonRepository;

  @Autowired
  private ModelMapper modelMapper;

  //added this for testing
  @Autowired
  public PokemonService(PokemonRepository pokemonRepository) {
    this.pokemonRepository = pokemonRepository;
  }

  public Pokemon create(CreatePokemonDTO data) {
    Pokemon newPokemon = modelMapper.map(data, Pokemon.class);
    Pokemon createdPokemon = this.pokemonRepository.save(newPokemon);
    return createdPokemon;
  }

  public List<Pokemon> findAll(Optional<String> type, Optional<Integer> minHp) { //update to allow type and minHp for query parameter
    if (type.isPresent()) {
      return this.pokemonRepository.findByType(type.get());
    } else if (minHp.isPresent()) {
      return this.pokemonRepository.findByHpGreaterThanEqual(minHp.get());
    } else {
      return this.pokemonRepository.findAll();
    }
  }

  public Optional<Pokemon> findById(Long id) {
    Optional<Pokemon> maybePokemon = this.pokemonRepository.findById(id);
    return maybePokemon;
  }

  public boolean deleteById(Long id) {
    Optional<Pokemon> maybePokemon = this.findById(id);
    if (maybePokemon.isEmpty()) {
      return false;
    }
    this.pokemonRepository.delete(maybePokemon.get()); // get() because this is an optional
    return true;
  }

  public Optional<Pokemon> updateById(Long id, UpdatePokemonDTO data) {
    Optional<Pokemon> maybePokemon = this.findById(id);
    if (maybePokemon.isPresent()) {
      Pokemon existingPokemon = maybePokemon.get(); // get the current value of the current pokemon optional
      modelMapper.map(data, existingPokemon);
      existingPokemon.setId(id);
      return Optional.of(this.pokemonRepository.save(existingPokemon));
    }
    return maybePokemon;
  }
}

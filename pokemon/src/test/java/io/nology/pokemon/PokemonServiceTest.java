package io.nology.pokemon;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.times;

import io.nology.pokemon.pokemonDB.CreatePokemonDTO;
import io.nology.pokemon.pokemonDB.Pokemon;
import io.nology.pokemon.pokemonDB.PokemonRepository;
import io.nology.pokemon.pokemonDB.PokemonService;
import io.nology.pokemon.pokemonDB.UpdatePokemonDTO;
import java.util.Optional;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.BDDMockito;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;
import org.modelmapper.ModelMapper;

@ExtendWith(MockitoExtension.class)
public class PokemonServiceTest {

  @Mock
  private PokemonRepository pokemonRepository;

  // @Mock
  @InjectMocks // changed this to InjectMocks instead of Mock to get ModelMapper working
  private PokemonService underTest;

  @Mock
  private ModelMapper modelMapper; // added this Mock for Model Mapper

  @BeforeEach
  void setUp() {
    this.underTest = new PokemonService(pokemonRepository);
    MockitoAnnotations.openMocks(this); // added this to test ModelMapper
  }

  @Test
  void serviceFindAllShouldCallTheFindAllIfNoArgsPassed() {
    underTest.findAll(Optional.empty(), Optional.empty());
    Mockito.verify(pokemonRepository).findAll();
  }

  @Test
  void serviceFindAllShouldCallFindByTypeIfTypePassedIn() {
    Optional<String> type = Optional.of("Electric");
    underTest.findAll(type, Optional.empty());
    Mockito.verify(pokemonRepository).findByType(type.get());
  }

  @Test
  void serviceFindAllShouldCallFindByMinHpIfHpPassedIn() {
    Optional<Integer> minHp = Optional.of(50);
    underTest.findAll(Optional.empty(), minHp);
    Mockito.verify(pokemonRepository).findByHpGreaterThanEqual(minHp.get());
  }

  @Test
  void itShouldCreateNewPokemonUsingCreate() {
    // ModelMapper modelMapper = Mockito.mock(ModelMapper.class);

    Pokemon newPokemon = new Pokemon(
      "pikachu",
      "Electric",
      35,
      "http://pikachu.com",
      172
    );

    CreatePokemonDTO data = new CreatePokemonDTO(
      "pikachu",
      "Electric",
      35,
      "http://pikachu.com",
      172
    );

    // Mock behaviour of modelMapper and pokemonRepository

    BDDMockito
      .given(modelMapper.map(data, Pokemon.class))
      .willReturn(newPokemon);
    BDDMockito.given(pokemonRepository.save(newPokemon)).willReturn(newPokemon);

    Pokemon createdPokemon = underTest.create(data);

    ArgumentCaptor<Pokemon> pokemonArgument = ArgumentCaptor.forClass(
      Pokemon.class
    );

    Mockito.verify(pokemonRepository).save(pokemonArgument.capture());

    Assertions.assertThat(pokemonArgument.getValue()).isEqualTo(newPokemon);

    Assertions.assertThat(createdPokemon).isEqualTo(newPokemon);
  }

  @Test
  void itShouldDeletePokemonIfIdExists() {
    Long id = 123L;
    Pokemon pokemon = new Pokemon();
    pokemon.setId(id);

    BDDMockito
      .given(pokemonRepository.findById(id))
      .willReturn(Optional.of(pokemon));

    underTest.deleteById(id);

    ArgumentCaptor<Pokemon> pokemonArgument = ArgumentCaptor.forClass(
      Pokemon.class
    );

    Mockito.verify(pokemonRepository).delete(pokemonArgument.capture());

    Assertions.assertThat(pokemonArgument.getValue()).isEqualTo(pokemon);
  }

  @Test
  void itShouldUpdatePokemonIfIdExists() {
    Long id = 123L;
    Pokemon pokemon = new Pokemon();
    pokemon.setId(id);

    UpdatePokemonDTO updateData = new UpdatePokemonDTO();
    BDDMockito
      .given(pokemonRepository.findById(id))
      .willReturn(Optional.of(pokemon));

    BDDMockito
      .given(pokemonRepository.save(any(Pokemon.class)))
      .willAnswer(i -> i.getArguments()[0]);

    // this is an alternative, but not using BDD.Mockito
    // when(pokemonRepository.findById(id)).thenReturn(Optional.of(pokemon));
    // when(pokemonRepository.save(any(Pokemon.class)))
    //   .thenAnswer(i -> i.getArguments()[0]);

    Optional<Pokemon> updatedPokemon = underTest.updateById(id, updateData);

    assertTrue(updatedPokemon.isPresent());
    assertEquals(id, updatedPokemon.get().getId());

    BDDMockito
      .then(modelMapper)
      .should(times(1))
      .map(eq(updateData), any(Pokemon.class));
  }
}

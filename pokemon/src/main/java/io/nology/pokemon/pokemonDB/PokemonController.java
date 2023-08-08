package io.nology.pokemon.pokemonDB;

import io.nology.pokemon.exceptions.NotFoundException;
import jakarta.validation.Valid;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/pokemon")
public class PokemonController {

  @Autowired
  private PokemonService pokemonService;

  //^ CREATE
  @PostMapping
  public ResponseEntity<Pokemon> createPokemon(
    @Valid @RequestBody CreatePokemonDTO data
  ) {
    Pokemon createdPokemon = this.pokemonService.create(data);
    return new ResponseEntity<>(createdPokemon, HttpStatus.CREATED);
  }

  //^ READ
  // get all pokemon

  // @ResponseBody
  // public String getType(@RequestParam(required = false) String type) {
  //   return "Type:" + type;
  // }
  @GetMapping
  public ResponseEntity<List<Pokemon>> getAll(
    @RequestParam Optional<String> type,
    @RequestParam Optional<Integer> minHp
  ) {
    List<Pokemon> allPokemon = this.pokemonService.findAll(type, minHp);
    return new ResponseEntity<>(allPokemon, HttpStatus.OK);
  }

  // get pokemon by ID
  @GetMapping("/{id}")
  public ResponseEntity<Pokemon> getById(@PathVariable Long id) {
    Optional<Pokemon> foundPokemon = this.pokemonService.findById(id);
    if (foundPokemon.isEmpty()) {
      throw new NotFoundException(
        String.format("Pokemon with id %d is not found", id)
      );
    }
    return new ResponseEntity<>(foundPokemon.get(), HttpStatus.OK);
  }

  // get pokemon by Type

  //^ UPDATE
  @PatchMapping("/{id}")
  public ResponseEntity<Pokemon> updateById(
    @PathVariable Long id,
    @Valid @RequestBody UpdatePokemonDTO data
  ) {
    Optional<Pokemon> maybeUpdated = this.pokemonService.updateById(id, data);

    if (maybeUpdated.isEmpty()) {
      throw new NotFoundException(
        String.format("Post with id %d was not found, could not update", id)
      );
    }
    return new ResponseEntity<Pokemon>(maybeUpdated.get(), HttpStatus.OK);
  }

  //^ DELETE
  @DeleteMapping("/{id}")
  public ResponseEntity<Pokemon> deleteById(@PathVariable Long id) {
    boolean deleted = this.pokemonService.deleteById(id);

    if (!deleted) {
      throw new NotFoundException(
        String.format("Post with id %d was not found, could not delete", id)
      );
    }
    return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
  }
}

package io.nology.pokemon.config;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ModelMapperConfig {

  @Bean
  public ModelMapper modelMapper() {
    ModelMapper mapper = new ModelMapper();

    // mapper.typeMap(String.class, String.class);

    mapper.getConfiguration().setSkipNullEnabled(true);

    return mapper;
  }
}

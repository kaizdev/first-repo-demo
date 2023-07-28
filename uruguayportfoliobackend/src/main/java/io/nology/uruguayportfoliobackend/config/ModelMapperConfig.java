package io.nology.uruguayportfoliobackend.config;

import io.nology.uruguayportfoliobackend.converters.StringConverter;
import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration // need to add configuration annotation
public class ModelMapperConfig {

  @Bean //Beans are objects managed by the framework
  public ModelMapper modelMapper() {
    // mapper will take in DTO (create or update)
    // will turn DTO int Post so I can save it in db
    // replace the need for using constructors or setters
    ModelMapper mapper = new ModelMapper();
    // set up my options here
    mapper
      .typeMap(String.class, String.class)
      .setConverter(new StringConverter());
    // trim strings

    // if there are any null values, skip them (as we don't want to overwrite values)
    mapper.getConfiguration().setSkipNullEnabled(true);

    return mapper;
  }
}

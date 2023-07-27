package io.nology.uruguayspringintro.greeting;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// let spring know this is our controller class @RestController
@RestController
// request mapping - map all the http requests that come to the end point (e.g. /greeting) -> map to this class and find what needs to be returned
@RequestMapping("/greeting") // main end point that the default mapping will get
public class GreetingController {

  // GET, POST, PUT/PATCH, DELETE -> need methods for each type we want to support

  // Let's just focus on GET for now. Specify on what type we want to trigger the method (e.g. @GetMapping)

  @GetMapping
  public String hello() {
    return "Hello World!!";
  }

  @GetMapping("/goodbye") // this adds the get method comes after the top RequestMapping (i.e. localhost:8080/greeting/goodbye)
  public String goodbye() {
    return "Goodbye World";
  }

  // dynamic route
  // Hello, {name}
  @GetMapping("/{name}") // wrap in curly braces to make it a dynamic route and specify name comes from url (@PathVariable)
  public String helloWithName(@PathVariable String name) {
    return String.format("Hello, %s", name);
  }
}

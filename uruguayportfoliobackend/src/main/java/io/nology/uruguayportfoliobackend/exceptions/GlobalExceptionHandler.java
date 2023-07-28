package io.nology.uruguayportfoliobackend.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {

  @ExceptionHandler(NotFoundException.class) // specify that this particular error is for this class
  public ResponseEntity<String> handleNotFoundException(NotFoundException ex) {
    return new ResponseEntity<String>(ex.getMessage(), HttpStatus.NOT_FOUND);
  }
}
// this set up allows us to reuse the exception message - pick up any not found exception and issue the response. We add the @ControllerAdvice annotation
// picks up on not found exceptions and issues standard response

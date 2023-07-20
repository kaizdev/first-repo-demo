package Testing;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertThrows;
import static org.junit.Assert.assertTrue;

import java.util.ArrayList;
import java.util.Arrays;

import org.junit.jupiter.api.Test;

public class UtilsTest {

  @Test
  public void add_TwoPositiveIntegers_ReturnsCorrectSum() {
    // 1. set up data
    int expectedResult = 4;

    //2. call the method we're testing
    int actualResult = Utils.add(2, 2);

    // 3. assert
    assertEquals(expectedResult, actualResult);
  }

  @Test
  public void add_TwoNegativeIntegers_ReturnsCorrectSum() {
    int expectedResult = -5;
    int actualResult = Utils.add(-1, -4);
    assertEquals(expectedResult, actualResult);
  }

  @Test
  public void divide_TwoPositiveDoubles_ReturnsCorrectResult() {
    double expectedResult = 10.0;
    double actualResult = Utils.divide(100.00, 10.00);
    assertEquals(expectedResult, actualResult, actualResult); //todo: review this
    // assertEquals(2.0, Utils.divide(4.0, 2.0));
  }

  @Test
  public void divide_DivisorIsZero_ThrowsArithmeticException() {
    // use assertThrows for exceptions
    // 1st param, the error.class, the 2nd param is lamba function for the calculation
    assertThrows(ArithmeticException.class, () -> Utils.divide(10.0, 0.00));
  }

  @Test
  public void makeUnique_InputArrayHasDuplicates_ReturnsShorterList() {
    ArrayList<Integer> input = new ArrayList<>(
      Arrays.asList(1, 1, 1, 2, 2, 3, 3)
    );
    ArrayList<Integer> expected = new ArrayList<>(Arrays.asList(1, 2, 3));
    ArrayList<Integer> actual = Utils.makeUnique(input);

    // receive a shorter array
    assertTrue(actual.size() < input.size());
    assertTrue(actual.size() == expected.size());
  }

  //^ Tests Challenge - ArrayList Tests
  // check if a list with no unique elements returns a list of the same size. checking for equal length

  @Test
  public void makeUnique_InputArrayHasNoDuplicates_ReturnsSameLengthList() {
    ArrayList<Integer> input = new ArrayList<>(Arrays.asList(5, 3, 2));
    ArrayList<Integer> actual = Utils.makeUnique(input);
    assertTrue(actual.size() == input.size());
  }

  // check for list with duplicates, check if the actual == expected

  @Test
  public void makeUnique_InputArrayHasDuplicates_ReturnsCorrectArray() {
    ArrayList<Integer> input = new ArrayList<>(
      Arrays.asList(1, 2, 3, 1, 2, 3, 1, 2, 3)
    );
    ArrayList<Integer> expected = new ArrayList<>(Arrays.asList(1, 2, 3));
    ArrayList<Integer> actual = Utils.makeUnique(input);
    assertEquals(expected, actual);
  }

  // check list with no duplicates, check if the actual == expected (check that the input is the same as the return)

  @Test
  public void makeUnique_InputArrayHasNoDuplicates_ReturnsSameArray() {
    ArrayList<Integer> input = new ArrayList<>(Arrays.asList(1, 2, 3));
    ArrayList<Integer> actual = Utils.makeUnique(input);
    assertEquals(input, actual);
  }
}

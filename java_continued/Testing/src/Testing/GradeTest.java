package Testing;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class GradeTest {

  // let's say I will have more tests that need an instance of grade

  //~ Instead of creating those grades in each test every time -> which repeats a lot of syntax
  //~ Use an annotation @BeforeEach
  // i.e. same instance of the objects can be re-used
  // add static property to the class

  //   static Grade notPassingGrade;

  static Grade grade;

  @BeforeEach
  void setUpGrade() {
    grade = new Grade();
  }

  // create a grade with 45 points and check if it's not passing

  @Test
  public void setPassing_PointsBelow50_SetsToFalse() throws PointsOutOfRange {
    // not a static method, so need to create an instance
    // Grade grade = new Grade(45);
    // assertFalse(notPassingGrade.getIsPassing()); // uses the defined instance in the @BeforeEach
    grade.setPoints(46);
    assertFalse(grade.getIsPassing());
  }

  // create a grade with 50 points and check that it passes

  @Test
  public void setPassing_PointsAbove50_SetsToTrue() throws PointsOutOfRange {
    // Grade grade = new Grade(50);
    grade.setPoints(50);
    assertTrue(grade.getIsPassing());
  }

  // create a grade with 90 points and check that it passes

  @Test
  public void calculateGrade_PointsBelow50_ReturnsC() throws PointsOutOfRange {
    grade.setPoints(44);
    char returnedGrade = 'c';
    char actual = grade.calculateGrade(grade.getPoints());
    assertEquals(returnedGrade, actual);
  }

  @Test
  public void setPoints_PointsBelow0_ThrowsPointsOutOfRangeException() {
    assertThrows(PointsOutOfRange.class, () -> grade.setPoints(-10));
  }
}

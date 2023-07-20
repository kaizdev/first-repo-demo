package Testing;

// creating a custom Error Message
public class PointsOutOfRange extends Exception {

  //^ Important: extend the Exception in the class definition
  // just boilerplate below
  private static final long serialVersionUID = 1L;

  // our own code
  public PointsOutOfRange(String message) {
    super(message);
  }
}

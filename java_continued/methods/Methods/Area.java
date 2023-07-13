package java_continued.methods.Methods;

// Method overloading (writing the same method but taking different args)
public class Area {

  /**
   * Method calculates the area of a circle
   * @param radius
   * @return the area of a circle
   */
  static double findArea(double radius) {
    return Math.PI * Math.pow(radius, 2);
  }

  static double findArea(double length, double width) {
    return length * width;
  }

  static double findArea() {
    return 0.0;
  }
}

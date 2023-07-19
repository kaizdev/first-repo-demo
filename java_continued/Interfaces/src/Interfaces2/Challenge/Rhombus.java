package Interfaces2.Challenge;

public class Rhombus implements Area, Perimeter {

  private double diagonal1, diagonal2;

  public Rhombus(double diagonal1, double diagonal2) {
    this.diagonal1 = diagonal1;
    this.diagonal2 = diagonal2;
  }

  @Override
  public double getArea() {
    return 0.5 * diagonal1 * diagonal2;
  }

  @Override
  public double getPerimeter() {
    return 2 * Math.sqrt((diagonal1 * diagonal1) + (diagonal2 * diagonal2));
  }
}

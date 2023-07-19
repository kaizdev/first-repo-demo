package Interfaces2.Challenge;

public class Main {

  public static void main(String[] args) {
    Circle newCircle = new Circle(5);
    System.out.println("Circle");
    System.out.println(newCircle.getArea() + " get area");
    System.out.println(newCircle.getPerimeter() + " get perimeter");

    Triangle newTriangle = new Triangle(3, 4, 5);
    System.out.println("Triangle");
    System.out.println(newTriangle.getArea() + " get area");
    System.out.println(newTriangle.getPerimeter() + " get perimeter");

    Rhombus newRhombus = new Rhombus(5, 5);
    System.out.println("Rhombus");
    System.out.println(newRhombus.getArea());
    System.out.println(newRhombus.getPerimeter());
  }
}

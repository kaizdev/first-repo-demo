package Generics;

public class Coordinates<T extends Number> {

  // cannot have more than 1 class, but can have 1 class and 1 interface. e.g. T extends Number & Comparable

  T x;
  T y;

  public Coordinates(T x, T y) {
    this.x = x;
    this.y = y;
  }
}

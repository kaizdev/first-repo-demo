package Generics;

public class MathHelper {

  // support multiple data types, but not ALL data types - make sure that the data types will have certain methods
  // trying to create a class that adds 2 of anything together, doesn't work. e.g. book + book doesn't make sense
  // to fix, we need to specify the boundaries to this generic type
  // T extends Number

  public static <T extends Comparable> T max(T one, T two) {
    T biggerThing = one;

    if (two.compareTo(one) > 0) {
      biggerThing = two;
    }
    return biggerThing;
  }
  // only classes that implement the Comparable will work (so it limits what T can be)
}

package Generics;

import java.util.ArrayList;

public class TopThreeList<T> {

  ArrayList<T> favSomething = new ArrayList<T>();

  // ArrayList<T> favSomething = new ArrayList();

  public TopThreeList(T first, T second, T third) {
    favSomething.add(first);
    favSomething.add(second);
    favSomething.add(third);
  }
}

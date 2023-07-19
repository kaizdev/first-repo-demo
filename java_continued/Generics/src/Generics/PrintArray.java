package Generics;

public class PrintArray {

  // using typed methods
  // any data type I want to support, I would need to add my own custom method
  public static void printStringArray(String[] stringArr) {
    for (String str : stringArr) {
      System.out.println(str);
    }
  }

  public static void printIntArray(Integer[] intArr) {
    for (Integer someInt : intArr) {
      System.out.println(someInt);
    }
  }

  public static void printCharArray(char[] charArr) {
    for (char someChar : charArr) {
      System.out.println(someChar);
    }
  }

  // Let's create a generic method that will take any data type. This replaces the above 3 methods
  public static <T> void printAnyArray(T[] anyArr) {
    for (T thing : anyArr) {
      System.out.println(thing);
    }
  }
}

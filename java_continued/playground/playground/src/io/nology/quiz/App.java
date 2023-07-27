package io.nology.quiz;

/**
 * Hello world!
 *
 */
public class App {

  public static void main(String[] args) {
    System.out.println("7 == \"7\" = " + 7 == "7");
  }

  public static int power(int voltage, float current) {
    return (int) (voltage * current);
  }

  public static int[] myMethod(int[] numbers) {
    int[] newArray = new int[numbers.length];
    for (int i = 0; i < numbers.length; i++) {
      newArray[i] = numbers[i] + 1;
    }
    return newArray;
  }
}

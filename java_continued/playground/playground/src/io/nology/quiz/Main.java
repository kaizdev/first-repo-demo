package io.nology.quiz;

import java.util.ArrayList;

public class Main {

  public static void main(String[] args) {
    // String newString = new String("hello");

    // StringUtils stringUtils = new StringUtils();
    // stringUtils.join();

    // System.out.println(add(3, 5));

    // System.out.println(power(5, 2.0f));

    // Integer[] numbers = { 1, 2, 3, 4, 5 };

    // Integer[] numsWithStream = Stream
    //   .of(numbers)
    //   .map(num -> num + 1)
    //   .toArray(Integer[]::new);

    // System.out.println(Arrays.toString(numsWithStream));
    // for (int num : nums) {
    //   System.out.println(num);
    // }

    String passwordtoCheck = null;
    Boolean isCorrect = checkPass(passwordtoCheck);
    System.out.println(isCorrect);
  }

  public static int add(int n, int m) {
    return n + m;
  }

  public static float power(int voltage, float current) {
    return (float) (voltage * current);
  }

  public static int[] myMethod(int[] numbers) {
    int[] newArray = new int[numbers.length];
    for (int i = 0; i < numbers.length; i++) {
      newArray[i] = numbers[i] + 1;
    }
    return newArray;
  }

  public static Boolean checkPass(String pass) {
    if (pass.equals("MyPass")) return true;
    return false;
  }

  final Integer secretCode = new Integer(123);
  ArrayList<Integer> previousAttempts = new ArrayList();

  public Boolean verifyCode(int attempt) {
    Integer currentAttempt = new Integer(attempt);
    previousAttempts.add(currentAttempt);
    if (currentAttempt == secretCode) return true;

    return false;
  }
}

package java_continued.arrays.Arrays;

import java.util.Arrays;

public class Main {

  public static void main(String[] args) {
    String[] names = { "Alice", "Bob", "Charlie" };
    System.out.println(names[0]);
    System.out.println(names[1]);
    System.out.println(names[2]);

    int[] numbers = new int[3];
    numbers[0] = 2;
    numbers[1] = 4;
    numbers[2] = 6;

    // We can copy arrays using the System.arrayCopy() method
    // This syntax is a bit gross

    int[] newNumbers = new int[4];
    System.arraycopy(numbers, 0, newNumbers, 0, numbers.length);
    newNumbers[3] = 8;
    System.out.println(Arrays.toString(newNumbers));
    // System.out.println(numbers); // get a random string here - specify location in memory

    // A way nice syntax is to use Arrays.copyOf(). Can reassign numbers
    numbers = Arrays.copyOf(numbers, 4);
    numbers[3] = 8;
    System.out.println(Arrays.toString(numbers));
    // System.out.println(Arrays.toString(numbers));
    // System.out.println(Arrays.toString(names));

    // third way - most manual way
    int[] numbersCopy = new int[numbers.length + 1];
    for (int i = 0; i < numbers.length; i++) {
      numbersCopy[i] = numbers[i];
    }
    System.out.println(numbersCopy);

    // Create a class called ArrayUtils
    // Create a static method that takes in an int[]
    // ... and returns a new int[] where all numbers have been incremented
    // Input => Output Examples:
    // { 1, 2, 3 } => { 2, 3, 4 }
    // { 45, 23 } => { 46, 24 }
    // { } => { }

    int[] array1 = { 1, 2, 3 };
    int[] array2 = {};
    int[] array3 = { 45, 23, 30 };

    System.out.println(Arrays.toString(ArrayUtils.updateArray(array1)));
    System.out.println(Arrays.toString(ArrayUtils.updateArray(array2)));
    System.out.println(Arrays.toString(ArrayUtils.reverseArray(array3)));
    System.out.println(Arrays.toString(ArrayUtils.reverseArray(array2)));
  }
}

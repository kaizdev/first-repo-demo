package java_continued.arrays.Arrays;

public class ArrayUtils {

  // MVP:
  // Create a class called ArrayUtils
  // Create a static method that takes in an int[]
  // ... and returns a new int[] where all numbers have been incremented
  // Input => Output Examples:
  // { 1, 2, 3 } => { 2, 3, 4 }
  // { 45, 23 } => { 46, 24 }
  // { } => { }

  public static int[] updateArray(int[] arrayName) {
    int[] arrayCopy = new int[arrayName.length];
    for (int i = 0; i < arrayName.length; i++) {
      arrayCopy[i] = arrayName[i] + 1;
    }
    return arrayCopy;
  }

  public static int[] reverseArray(int[] arrayName) {
    int[] reverseArray = new int[arrayName.length];
    for (int i = 0; i < arrayName.length; i++) {
      reverseArray[i] = arrayName[arrayName.length - 1 - i];
    }
    return reverseArray;
  }
}
// Challenge: Reverse Items in an Array
// Create a static method that takes in int[] on your ArrayUtils class
// ... and returns a new int[] where all the items are in the reverse order
// Input => Output Examples:
// { 1, 2, 3 } => { 3, 2, 1 }
// { 45, 23 } => { 23, 45 }
// { } => { }

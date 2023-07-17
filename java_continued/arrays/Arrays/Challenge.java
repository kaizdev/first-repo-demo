package java_continued.arrays.Arrays;

import java.util.Arrays;

public class Challenge {

  //   int a, b, c, d;
  // a, b = 2;
  // c = 3;
  // d = 4;

  // int [][][][] fourDArray = new int[a][b][c][d];

  // Use for loops to fill this multi dimensional array with incremented values

  public static void main(String[] args) {
    int a = 2;
    int b = 2;
    int c = 3;
    int d = 4;

    int[][][][] fourDArray = new int[a][b][c][d];

    int value = 1;

    for (int i = 0; i < a; i++) {
      for (int j = 0; j < b; j++) {
        for (int k = 0; k < c; k++) {
          for (int l = 0; l < d; l++) {
            fourDArray[i][j][k][l] = value;
            value++;
          }
        }
      }
    }

    System.out.println(Arrays.deepToString(fourDArray));

    for (int[][][] threeDArray : fourDArray) {
      for (int[][] twoDArray : threeDArray) {
        for (int[] oneDArray : twoDArray) {
          System.out.println(Arrays.toString(oneDArray));
        }
      }
    }
    // If you want to view it in array form

    // Print out the array
    // System.out.print("[");
    // for (int i = 0; i < a; i++) {
    //   if (i > 0) {
    //     System.out.print(", ");
    //   }
    //   System.out.print("[");
    //   for (int j = 0; j < b; j++) {
    //     if (j > 0) {
    //       System.out.print(", ");
    //     }
    //     System.out.print("[");
    //     for (int k = 0; k < c; k++) {
    //       if (k > 0) {
    //         System.out.print(", ");
    //       }
    //       System.out.print("[");
    //       for (int l = 0; l < d; l++) {
    //         if (l > 0) {
    //           System.out.print(", ");
    //         }
    //         System.out.print(fourDArray[i][j][k][l]);
    //       }
    //       System.out.print("]");
    //     }
    //     System.out.print("]");
    //   }
    //   System.out.print("]");
    // }
    // System.out.println("]");
  }
}

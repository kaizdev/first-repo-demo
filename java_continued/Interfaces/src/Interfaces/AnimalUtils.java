package Interfaces;

public class AnimalUtils {

  // I am guaranteed that everything that makes sound has the sound method
  // I can call it without worrying that the code will break
  public static void printAnimalInfo(MakesSound animal) {
    System.out.println("The animal's sound is: " + animal.sound());
  }
}

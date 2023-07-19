package Interfaces;

public class Dog implements MakesSound, DoesEat {

  // adding a second interface above with a comma
  // can have one class with multiple interfaces

  @Override
  public String sound() {
    return "Woof";
  }

  @Override
  public String eat() {
    return "Bone";
  }
}

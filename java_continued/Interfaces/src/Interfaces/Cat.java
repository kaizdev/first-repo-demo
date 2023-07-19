package Interfaces;

public class Cat implements MakesSound, DoesEat {

  @Override
  public String sound() {
    return "Meow";
  }

  @Override
  public String eat() {
    return "Cat food";
  }
}

package Interfaces;

public interface IMedia {
  // Think of interfaces as the rules for the classes. They need these rules!

  public String getInfo(); // method that does not have an implementation

  public void getCharacters(); // also enforces the return type in the classes (e.g. needs to be void)
}
